import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { ProjectService } from "./projects.service";

@Injectable({
  providedIn: "root",
})
export class ProjectsResolver implements Resolve<any> {
  constructor(private projectService: ProjectService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.projectService.getProjects().pipe(
      catchError((error) => {
        return of("No data");
      })
    );
  }
}
