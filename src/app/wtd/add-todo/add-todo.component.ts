import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  name = 'Shivam';
  tIsRepeat = false;
  isDesc = false;
  firstFG: FormGroup;
  secFG: FormGroup;
  thirdFG: FormGroup;
  fourthFG: FormGroup;
  selectedDate =  new Date();
  constructor(public addDialogRef: MatDialogRef<AddTodoComponent>, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFG = this.formBuilder.group({
      tName: ['', Validators.required],
      tDesc: ['']
    });
    this.secFG   = this.formBuilder.group({
      tWorkHrs: ['2', [Validators.min(0), Validators.required]],
      tQuanta: ['', Validators.min(0)]
    });
    this.thirdFG   = this.formBuilder.group({
      tDeadlineDate: ['', [Validators.required]]
    });
  }

  closeDialog() {
    this.addDialogRef.close();
  }

  cd($event) {
    console.log($event);
    this.selectedDate = $event;
  }
  canFocus($event) {
    console.log("sdsdsd");
    console.log($event);
  }
}
