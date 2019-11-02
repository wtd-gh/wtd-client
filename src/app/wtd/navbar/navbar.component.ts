import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../../services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTodoComponent } from '../add-todo/add-todo.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {

  constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private auth: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  uName = 'Shivam';
  sActive = false;
  searchText = '';

  sideNav = false;
  mobileQuery: MediaQueryList;
  addDialogRef: MatDialogRef<AddTodoComponent, any>;

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

  openAddDialog() {
    this.addDialogRef = this.dialog.open(AddTodoComponent, { id: 'add-todo-dialog', disableClose: true});
  }

  closeAddDialog() {
    this.addDialogRef.close();
  }

}
