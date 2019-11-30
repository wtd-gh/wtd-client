import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  name = '';
  tIsRepeat = false;
  isDesc = false;
  firstFG: FormGroup;
  secFG: FormGroup;
  thirdFG: FormGroup;
  fourthFG: FormGroup;
  selectedDate = new Date();
  tDeadTime = '10:00';
  constructor(
    private snackBar: MatSnackBar,
    public addDialogRef: MatDialogRef<AddTodoComponent>,
    public user: UserService, private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.name = this.user.getName(true);
    this.firstFG = this.formBuilder.group({
      tName: ['', Validators.required],
      tDesc: ['']
    });
    this.secFG = this.formBuilder.group({
      tWorkHrs: [2, [Validators.min(0), Validators.required]],
      tQuanta: [1, Validators.min(0)]
    });
    this.thirdFG = this.formBuilder.group({
      tDeadlineTime: ['', [Validators.required]]
    });
  }

  closeDialog() {
    this.addDialogRef.close();
  }

  changeDate($event) {
    this.selectedDate = $event;
  }

  changeTime($event) {
    this.tDeadTime = $event;
  }

  parseTime(time: string) {
    let hrs: number;
    let mins: number;

    let t = time.split(':');
    hrs = parseInt(t[0], 10);
    t = t[1].split(' ');
    mins = parseInt(t[0], 10);
    if (t[1] === 'PM') {
      hrs += 12;
    }
    return { hrs, mins };
  }

  async addTask() {
    const tDeadline = new Date(this.selectedDate);
    const time = this.parseTime(this.tDeadTime);
    tDeadline.setHours(time.hrs);
    tDeadline.setMinutes(time.mins);
    const task = {
      tName: this.firstFG.get('tName').value,
      tDesc: this.firstFG.get('tDesc').value,
      tQuanta: this.secFG.get('tQuanta').value,
      tWorkHrs: this.secFG.get('tWorkHrs').value,
      tDeadline
    };
    const resp = await this.user.addTask(task);
    if (!resp.ok) {
      this.openSnackBar(resp.error, 'close');
    } else {
      this.openSnackBar('Task added successfully!', 'close');
      this.closeDialog();
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1500,
    });
  }
}
