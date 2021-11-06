import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Project } from "./project.model";
import { ProjectService } from "./projects.service";

@Component({
  templateUrl: "projects.component.html",
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectsService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.projects = response.data.projects;
    });
  }

  onDeleteProject(id: string) {
    this.projectsService.deleteProject(id).subscribe(
      (data: any) => {
        console.log(data);
        this.projects = this.projects.filter((x) => x.id !== id);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
