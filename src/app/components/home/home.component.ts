import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  activeI = 0;
  constructor() {}

  ngOnInit() {}

  handleTabChange(e) {
    this.activeI = e.index;
  }
  openSignUpTab() {
    this.activeI = 1;
  }
}
