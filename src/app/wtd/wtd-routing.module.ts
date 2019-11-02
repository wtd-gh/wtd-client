import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoomOutComponent } from './zoom-out/zoom-out.component';
import { WhatTodoComponent } from './what-todo/what-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LabelsComponent } from './labels/labels.component';
import { FinishedComponent } from './finished/finished.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'wtd', component: WhatTodoComponent },
      { path: 'zoom-out', component: ZoomOutComponent },
      { path: 'labels', component: LabelsComponent },
      { path: 'finished', component: FinishedComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WtdRoutingModule { }
