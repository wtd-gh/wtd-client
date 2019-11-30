import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnonymusGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) { }
  async canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const resp = await this.auth.isLogin();
    console.log(resp);
    if (resp) {
      this.router.navigate(['/', 'home', 'wtd']);
      return false;
    }
    return true;
  }
}
