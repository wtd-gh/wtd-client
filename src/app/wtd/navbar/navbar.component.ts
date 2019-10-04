import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private auth: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  uName = 'Shivam';

  sideNav = false;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  toggleSideNav() {
    this.sideNav = !this.sideNav;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  async logout() {
    await this.auth.isLogin();
    console.log('logout');
  }
}
