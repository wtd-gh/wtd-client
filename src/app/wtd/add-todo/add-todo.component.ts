import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  name = 'Shivam';

  tName: string;
  tDesc: string;
  tDeadline: Date;
  tCompHrs: number;
  tQuanta: number;

  tIsRepeat = false;
  tDayRepeat: number[] = [1, 2, 3, 4, 5];
  tDayTypes: any[] = [
    { label: 'S', value: 0 },
    { label: 'M', value: 1 },
    { label: 'T', value: 2 },
    { label: 'W', value: 3 },
    { label: 'T', value: 4 },
    { label: 'F', value: 5 },
    { label: 'S', value: 6 },
  ];

  constructor() {
  }

  ngOnInit() {}
}
