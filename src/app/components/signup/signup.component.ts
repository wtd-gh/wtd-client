import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hidePass = true;
  nameFC = new FormControl('', [Validators.required]);
  uNameFC = new FormControl('', [Validators.required]);
  emailFC = new FormControl('', [Validators.required, Validators.email]);
  passFC = new FormControl('', [Validators.required]);

  isRegistering = false;

  constructor(public auth: AuthService, public router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  async register() {
    this.isRegistering = true;
    const res = await this.auth.register({
      name: this.nameFC.value, email: this.emailFC.value, uName: this.uNameFC.value, pass: this.passFC.value
    });
    if (res.ok) {
      this.openSnackBar('Success, account created, Please login!', 'Close');
      this.isRegistering = false;
      return;
    }
    this.openSnackBar(res.error, 'Close');
    this.isRegistering = false;
    return;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
