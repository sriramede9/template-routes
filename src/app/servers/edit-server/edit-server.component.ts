import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Router } from "@angular/router";
// import { Router } from "@angular/";
import { Observable } from "rxjs/observable";
import { CanComponentDeactivate } from "./can_deactivate_gaurd_service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private routes: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = +this.routes.snapshot.params["id"];
    this.allowEdit =
      this.routes.snapshot.queryParams["allowEdit"] === "1" ? true : false;
    // console.log(this.allowEdit);
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(["../"], { relativeTo: this.routes });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm("Do you want to discard changes?");
    } else {
      return true;
    }
  }
}
