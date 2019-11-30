import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) { }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const resp = await this.auth.isLogin();
    console.log(resp);
    if (resp) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
