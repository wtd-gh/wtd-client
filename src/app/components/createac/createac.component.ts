import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createac',
  templateUrl: './createac.component.html',
  styleUrls: ['./createac.component.scss']
})
export class CreateacComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect() {
    this.router.navigate(['/', 'signin']);
  }

}
