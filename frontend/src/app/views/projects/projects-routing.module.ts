import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProjectComponent } from "./project/project.component";
import { ProjectResolver } from "./project/project.resolver";
import { ProjectsComponent } from "./projects.component";
import { ProjectsResolver } from "./projects.resolver";

const routes: Routes = [
  {
    path: "",
    component: ProjectsComponent,
    data: {
      title: "Projects",
    },
    resolve: { data: ProjectsResolver },
  },
  {
    path: "add",
    data: {
      title: "Add Project",
    },
    component: ProjectComponent,
  },
  {
    path: "edit/:id",
    data: {
      title: "Edit Project",
    },
    component: ProjectComponent,
    resolve: { data: ProjectResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
