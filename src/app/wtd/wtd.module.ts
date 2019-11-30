import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WtdRoutingModule } from './wtd-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ZoomOutComponent } from './zoom-out/zoom-out.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { WhatTodoComponent } from './what-todo/what-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatModule } from '../matmodule';
import { TodoComponent } from './todo/todo.component';
import { MatNativeDateModule } from '@angular/material/core';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    ZoomOutComponent,
    AddTodoComponent,
    WhatTodoComponent,
    NavbarComponent,
    TodoComponent,
    LoaderComponent],
  imports: [
    CommonModule,
    WtdRoutingModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  entryComponents: [TodoComponent, AddTodoComponent],
  exports: [
    WtdRoutingModule,
    AddTodoComponent
  ],
  bootstrap: [NavbarComponent]
})
export class WtdModule { }
