import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name = "Shivam";

  sideNav = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.sideNav = !this.sideNav;
  }

  logout(){
    console.log("logout");
  }
}
