import { Component, OnInit, ViewChild } from '@angular/core';
import { GetalldataService } from './getalldata.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-getalldata',
  templateUrl: './getalldata.component.html',
  styleUrls: ['./getalldata.component.scss'],
})

export class GetalldataComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'email', field: 'email'  },];
    public students:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any[] = [];
 	rowIndex: Number = 0;




    constructor (
        private getalldataService: GetalldataService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.students.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GetAllValues() {
        this.getalldataService.GetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Route(queryId:any) {
        this.router.navigate(['./updatedata'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.GpRoute(selectedRows[0]._id);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }


}