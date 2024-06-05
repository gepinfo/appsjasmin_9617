import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateService } from './create.service';





@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public students:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }




    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
        this.students.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    Create() {
        this.createService.Create(this.students).subscribe((data:any) => {
            this.students.name = ''
 	 	this.students.email = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}