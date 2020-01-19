import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoomOutComponent } from './zoom-out/zoom-out.component';
import { WhatTodoComponent } from './what-todo/what-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'wtd', component: WhatTodoComponent },
      { path: 'zoom-out', component: ZoomOutComponent },
      { path: 'feedback', component: FeedbackComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WtdRoutingModule { }
