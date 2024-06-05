import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class CreateService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    Create(students:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.post(this.sharedService.WEB_API + '/students' + `?jwt_token=${jwt_token}`, students);
    }
}