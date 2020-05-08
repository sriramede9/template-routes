import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-generic-error-page",
  templateUrl: "./generic-error-page.component.html",
  styleUrls: ["./generic-error-page.component.css"],
})
export class GenericErrorPageComponent implements OnInit {
  errorMessage: string = "";
  constructor(private routes: ActivatedRoute) {}

  ngOnInit() {
    this.routes.data.subscribe((data: Data) => {
      this.errorMessage = data["message"];
    });
  }
}
