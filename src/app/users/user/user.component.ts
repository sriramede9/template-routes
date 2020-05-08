import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private routes: ActivatedRoute) {}

  ngOnInit() {
    let id = this.routes.snapshot.params["id"];
    let name = this.routes.snapshot.params["name"];
    this.user = { id: id, name: name };
    this.routes.params.subscribe((params: Params) => {
      this.user.id = params["id"];
      this.user.name = params["name"];
    });
  }
}
