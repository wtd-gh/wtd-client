import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoomOutComponent } from './zoom-out/zoom-out.component';
import { WhatTodoComponent } from './what-todo/what-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DidItComponent } from './did-it/did-it.component';


const routes: Routes = [
  {
    path: '',
    component: WhatTodoComponent
  },
  {
    path: 'zoom_out',
    component: ZoomOutComponent
  },
  {
    path: 'add_to_do',
    component: AddTodoComponent
  },
  {
    path: 'did_it',
    component: DidItComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WtdRoutingModule { }
