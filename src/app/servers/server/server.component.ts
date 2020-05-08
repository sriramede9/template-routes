import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";

import { Router, ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private router: Router,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routes.data.subscribe((data: Data) => {
      this.server = data["server"];
    });
    // this.server = this.serversService.getServer(1);
  }
  onEditServer() {
    this.router.navigate(["edit"], {
      relativeTo: this.routes,
      queryParamsHandling: "preserve",
    });
  }
}
