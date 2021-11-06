import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { Project } from "./project.model";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  url = "http://localhost:3000/api/projects";
  constructor(public http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url);
  }

  getProjectById(id): Observable<Project> {
    return this.http.get<Project>(this.url + "/" + id);
  }

  addNewProject(body): Observable<Project> {
    return this.http.post<Project>(this.url, body);
  }

  editProject(body): Observable<Project> {
    return this.http.put<Project>(this.url + "/" + body.id, {
      title: body.title,
      description: body.description,
    });
  }

  deleteProject(id): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.url + "/" + id);
  }
}
