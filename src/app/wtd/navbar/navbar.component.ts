import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../../services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {

  uName = '';
  quote = null;
  sActive = false;
  searchText = '';
  wText = 'Welcome';

  sideNav = false;
  mobileQuery: MediaQueryList;
  addDialogRef: MatDialogRef<AddTodoComponent, any>;

  private _mobileQueryListener: () => void;

  constructor(
    public dialog: MatDialog,
    public user: UserService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher, private auth: AuthService,
    private router: Router) {
    this.uName = this.user.getName(true);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    const d =  new Date().getHours();
    if (d >= 6 && d < 12) {
      this.wText = 'Good Morning';
    } else if (d >= 12 && d < 18) {
      this.wText = 'Good Afternoon';
    } else if (d >= 18 && d < 23) {
      this.wText = 'Good Evening';
    } else {
      this.wText = 'Good Night';
    }
  }

  async ngOnInit() {
    const res = await this.user.getQuote();
    this.quote = res;
  }

  toggleSideNav() {
    this.sideNav = !this.sideNav;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  async logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  openAddDialog() {
    this.addDialogRef = this.dialog.open(AddTodoComponent, { id: 'add-todo-dialog', disableClose: true});
  }

  closeAddDialog() {
    this.addDialogRef.close();
  }

}
