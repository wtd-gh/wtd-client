import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  uNameFC = new FormControl('', [Validators.required]);
  passFC = new FormControl('', [Validators.required]);

  isUnameError = false;
  isPassError = true;

  isLoggingIn = false;

  constructor(public auth: AuthService, public router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  async login() {
    this.isLoggingIn = true;
    const res = await this.auth.login({ uId: this.uNameFC.value, pass: this.passFC.value });
    if (res.ok) {
      await this.router.navigate(['/', 'wtd']);
      this.isLoggingIn = false;
      return;
    }
    this.openSnackBar(res.error, 'Close');
    this.isLoggingIn = false;
    return;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
