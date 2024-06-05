import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdatedataService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    Update(students:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.put(this.sharedService.WEB_API + '/students' + `?jwt_token=${jwt_token}`, students);
    }
    GetEntityById(studentsId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/students/' + studentsId + `?jwt_token=${jwt_token}`);
    }
}