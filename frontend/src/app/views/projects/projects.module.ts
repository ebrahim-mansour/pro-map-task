import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ButtonsModule } from "ngx-bootstrap/buttons";

import { ProjectsComponent } from "./projects.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "./project/project.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
  ],
  declarations: [ProjectsComponent, ProjectComponent],
})
export class ProjecstModule {}
