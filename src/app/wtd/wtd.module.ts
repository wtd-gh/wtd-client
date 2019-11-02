import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WtdRoutingModule } from './wtd-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ZoomOutComponent } from './zoom-out/zoom-out.component';
import { DidItComponent } from './did-it/did-it.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { WhatTodoComponent } from './what-todo/what-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatModule } from '../matmodule';
import { TodoComponent } from './todo/todo.component';
import { MatNativeDateModule } from '@angular/material/core';
import { LoaderComponent } from './loader/loader.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LabelsComponent } from './labels/labels.component';
import { FinishedComponent } from './finished/finished.component';



@NgModule({
  declarations: [ZoomOutComponent, DidItComponent, AddTodoComponent, WhatTodoComponent, NavbarComponent, TodoComponent, LoaderComponent, ProfileComponent, SettingsComponent, LabelsComponent, FinishedComponent],
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
