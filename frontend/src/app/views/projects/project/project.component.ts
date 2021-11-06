import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Project } from "../project.model";
import { ProjectService } from "../projects.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  project: Project;

  title = "";
  description = "";

  constructor(
    private projectsService: ProjectService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      if (response.data && response.data.project) {
        this.project = response.data.project;
        if (this.project) {
          this.title = this.project.title;
          this.description = this.project.description;
        }
      }
    });
  }

  onSubmit() {
    if (this.title.length === 0) {
      return alert("title is required");
    }
    if (this.description.length < 4) {
      return alert(
        "description is required and must be more than 4 characters"
      );
    }

    if (this.project) {
      this.projectsService
        .editProject({
          id: this.project.id,
          title: this.title,
          description: this.description,
        })
        .subscribe(
          (data: any) => {
            this.router.navigateByUrl("/");
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this.projectsService
        .addNewProject({ title: this.title, description: this.description })
        .subscribe(
          (data: any) => {
            this.router.navigateByUrl("/");
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
}
