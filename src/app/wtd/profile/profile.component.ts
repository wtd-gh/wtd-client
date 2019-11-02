import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  uFName = new FormControl('Shivam', [Validators.required]);
  uName = new FormControl('shivgo', [Validators.required]);
  uLName = new FormControl('Goyal', [Validators.required]);
  uGender = new FormControl(0, [Validators.required]);
  uPassword = new FormControl('password', [Validators.required]);
  uEmail = new FormControl('shivgo@iitk.ac.in', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

}
