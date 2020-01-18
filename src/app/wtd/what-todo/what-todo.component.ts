import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-what-todo',
  templateUrl: './what-todo.component.html',
  styleUrls: ['./what-todo.component.scss']
})
export class WhatTodoComponent implements OnInit {

  name = '';
  hrs: number;
  isCustom = false;
  isLoading = false;
  showTask = false;
  customHrs = 3;
  customMins = 0;
  task: any;
  msg = '';
  constructor(private user: UserService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.name = this.user.getName(true);
  }

  async getKeyCode(kc: number) {
    if (kc === 2) {
      await this.decQuanta();
    } else if (kc === 3) {
      await this.deleteTask();
      this.openSnackBar('Task deleted!', 'Done');
    }
  }

  async decQuanta() {
    const tId = this.task._id;
    const res = await this.user.decWork(tId, this.task.taskQuanta);
    this.task.taskWorkHrs -= this.task.taskQuanta;
    if (this.task.taskWorkHrs <= 0) {
      await this.deleteTask();
      this.openSnackBar('BRAVO!! One less task to go!', ':)', 2500);
    } else {
      this.openSnackBar('Going great! Keep up the momentum.', 'On it!', 2500);
    }
    return true;
  }

  async deleteTask() {
    const tId = this.task._id;
    const res = await this.user.deleteTask(tId);
    this.task = null;
    return true;
  }

  async getWTD(mins: number) {
    this.msg = null;
    this.isLoading = true;
    const resp = await this.user.WTD(mins);
    this.task = resp.task;
    this.showTask = true;
    this.isLoading = false;
    if (resp.error) {
      this.msg = resp.error;
    }
    console.log(this.task);
  }

  openSnackBar(message: string, action: string, time = 1500) {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }

}
