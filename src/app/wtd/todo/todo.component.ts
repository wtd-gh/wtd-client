import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  active = false;
  defTask = {
    taskName: 'Default task name',
  };

  @Input() task: any = this.defTask;
  @Input() isShow = false;
  @Output() keyPressed = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.active = this.isShow;
  }


  getDL(taskDL: string) {
    const d = new Date(taskDL);
    return d.toLocaleDateString();
  }

  getWHPD(task) {
    const now = new Date().getTime();
    const dl = new Date(task.taskDeadline).getTime();
    const days = ((dl - now) / 3600000) / 24;
    return Math.round(task.taskWorkHrs / days * 10) / 10;
  }

  getProgress(task) {
    const prog = (100 - task.taskWorkHrs / task.taskInitWorkHrs * 100);
    return prog.toString() + '%';
  }

  sendKeyCode(keyCode: number) {
    this.keyPressed.emit(keyCode);
  }

}
