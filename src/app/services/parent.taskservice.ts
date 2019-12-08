import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ParentTaskService {
    baseUrl: string = 'http://localhost:9992/fsd-project-manager/api/parentTasks/'
    constructor(public http: HttpClient) { }
    getParentTasks(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    getParentTaskByParentTaskId(parentTaskId): Observable<any> {
        return this.http.get(this.baseUrl + parentTaskId);
    }
    saveParentTask(formValue): Observable<any>{       
        return this.http.post(this.baseUrl, formValue);
    }
    updateParentTask(parentTaskId, formValue): Observable<any>{       
        return this.http.put(this.baseUrl, formValue);
    }
}
