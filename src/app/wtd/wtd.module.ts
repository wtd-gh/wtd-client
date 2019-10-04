import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WtdRoutingModule } from './wtd-routing.module';
import { FormsModule } from '@angular/forms';

import { ZoomOutComponent } from './zoom-out/zoom-out.component';
import { DidItComponent } from './did-it/did-it.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { WhatTodoComponent } from './what-todo/what-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatModule } from '../matmodule';
import { TodoComponent } from './todo/todo.component';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [ZoomOutComponent, DidItComponent, AddTodoComponent, WhatTodoComponent, NavbarComponent, TodoComponent],
  imports: [
    CommonModule,
    WtdRoutingModule,
    MatModule,
    FormsModule,
    MatNativeDateModule
  ],
  exports: [
    WtdRoutingModule
  ]
})
export default class WtdModule { }
