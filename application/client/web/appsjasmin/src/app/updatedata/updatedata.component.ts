import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdatedataService } from './updatedata.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.scss'],
})

export class UpdatedataComponent implements OnInit {
    queryId: any;
    public students:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }




    constructor (
        private updatedataService: UpdatedataService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.students.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe((params:any) => { 
 this.queryId = params['id'];
            });


        this.GetEntityById();
    
    }
    Update() {
        this.updatedataService.Update(this.students).subscribe((data:any) => {
            this.students.name = ''
 	 	this.students.email = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GetEntityById() {
        this.updatedataService.GetEntityById(this.queryId).subscribe((data:any) => {
            this.students = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}