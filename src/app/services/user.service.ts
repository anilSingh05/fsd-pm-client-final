import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
    baseUrl: string = 'http://localhost:9992/fsd-project-manager/api/users'
    constructor(public http: HttpClient) { }
    getUsers(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    getUsersById(employeeId): Observable<any> {
        return this.http.get(this.baseUrl + employeeId);
    }
    saveUser(formValue): Observable<any>{       
        return this.http.post(this.baseUrl, formValue);
    }
    updateUser(employeeId, formValue): Observable<any>{       
        return this.http.put(this.baseUrl, formValue);
    }
    deleteUser(employeeId): Observable<any>{       
        return this.http.delete(this.baseUrl + employeeId);
    }

}