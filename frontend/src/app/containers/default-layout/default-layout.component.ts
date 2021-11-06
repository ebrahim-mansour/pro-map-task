import { Component } from "@angular/core";
import { navItems } from "../../_nav";

@Component({
  selector: "app-dashboard",
  styleUrls: ["./default-layout.component.scss"],
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
