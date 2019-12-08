import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class TaskService {
    baseUrl: string = 'http://localhost:9992/fsd-project-manager/api/tasks/'
    constructor(public http: HttpClient) { }
    getTasks(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    getTaskByTaskId(TaskId): Observable<any> {
        return this.http.get(this.baseUrl + TaskId);
    }
    saveTask(formValue): Observable<any>{       
        return this.http.post(this.baseUrl, formValue);
    }
    updateTask(TaskId, formValue): Observable<any>{       
        return this.http.put(this.baseUrl, formValue);
    }
    updateTaskStatus(formValue): Observable<any>{
        return this.http.put(this.baseUrl + "updateTaskByTaskId?taskId="+formValue, null);
    }
    deleteTask(taskId): Observable<any>{       
        return this.http.delete(this.baseUrl + taskId);
    }
}

