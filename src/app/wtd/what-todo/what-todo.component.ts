import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-todo',
  templateUrl: './what-todo.component.html',
  styleUrls: ['./what-todo.component.scss']
})
export class WhatTodoComponent implements OnInit {

  name = 'Shivam';
  hrs: number;
  isCustom = false;
  constructor() { }

  ngOnInit() {
  }

}
