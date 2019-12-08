import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProjectService {
    baseUrl: string = 'http://localhost:9992/fsd-project-manager/api/projects/'
    constructor(public http: HttpClient) { }
    getProjects(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    getProjectById(projectId): Observable<any> {
        return this.http.get(this.baseUrl + projectId);
    }
    saveProject(formValue): Observable<any>{       
        return this.http.post(this.baseUrl, formValue);
    }
    updateProject(projectId, formValue): Observable<any>{       
        return this.http.put(this.baseUrl, formValue);
    }
    deleteProject(projectId): Observable<any>{       
        return this.http.delete(this.baseUrl + projectId);
    }
}