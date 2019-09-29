import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-todo',
  templateUrl: './what-todo.component.html',
  styleUrls: ['./what-todo.component.css']
})
export class WhatTodoComponent implements OnInit {

  name = 'Shivam';
  hrs: number;
  constructor() { }

  ngOnInit() {
  }

}
