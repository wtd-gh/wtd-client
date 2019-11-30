import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewContainerRef, TemplateRef, ComponentFactory } from '@angular/core';
import * as Muuri from 'muuri';
import { UserService } from 'src/app/services/user.service';
import { TodoComponent } from '../todo/todo.component';
import { MatSnackBar } from '@angular/material/snack-bar';

declare var Particles: any;

@Component({
  selector: 'app-zoom-out',
  templateUrl: './zoom-out.component.html',
  styleUrls: ['./zoom-out.component.scss']
})

export class ZoomOutComponent implements OnInit {

  name = '';
  loading = true;
  counter = 5;
  tasksList: any = [];

  isTempTask = false;

  constructor(private user: UserService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.name = this.user.getName(true);
    const res = await this.user.getAllTasks();
    console.log(res);
    this.tasksList = res.tasks;
    this.stopLoad();
    this.user.taskAdded.subscribe(resp => {
      if (resp && resp.ok) {
        const i = this.getPosition(resp.task);
        this.tasksList.splice(i, 0, resp.task);
      }
    });
  }

  stopLoad() {
    this.loading = false;
  }

  getWHPD(task) {
    const now = new Date().getTime();
    const dl = new Date(task.taskDeadline).getTime();
    const days = ((dl - now) / 3600000) / 24;
    return Math.round(task.taskWorkHrs / days * 10) / 10;
  }

  getPosition(task) {
    const whpd = this.getWHPD(task);
    let i = 0;
    for (; i < this.tasksList.length; i++) {
      if (whpd > this.getWHPD(this.tasksList[i])) {
        return i;
      }
    }
    return i;
  }

  compareTasks(t1: any, t2: any) {
    const t1WHrPD = this.getWHPD(t1);
    const t2WHrPD = this.getWHPD(t2);

    if (t1WHrPD > t2WHrPD) {
      return -1;
    } else {
      return 1;
    }
  }

  async getKeyCode(kc: number, index: number) {
    if (kc === 2) {
      await this.decQuanta(index);
    } else if (kc === 3) {
      await this.deleteTask(index);
      this.openSnackBar('Task deleted!', 'Done');
    }
  }

  async decQuanta(index: number) {
    const tId = this.tasksList[index]._id;
    const res = await this.user.decWork(tId, this.tasksList[index].taskQuanta);
    this.tasksList[index].taskWorkHrs -= this.tasksList[index].taskQuanta;
    console.log(this.tasksList);
    if (this.tasksList[index].taskWorkHrs <= 0) {
      await this.deleteTask(index);
      this.openSnackBar('BRAVO!! One less task to go!', ':)', 2500);
    } else {
      this.openSnackBar('Going great! Keep up the momentum.', 'On it!', 2500);
    }
    setTimeout(() => {
      this.tasksList.sort((t1: any, t2: any) => {
        const t1WHrPD = this.getWHPD(t1);
        const t2WHrPD = this.getWHPD(t2);
        if (t1WHrPD > t2WHrPD) {
          return -1;
        } else {
          return 1;
        }
      });
    }, 2000);
    return true;
  }

  async deleteTask(index: number) {
    const tId = this.tasksList[index]._id;
    const res = await this.user.deleteTask(tId);
    this.tasksList.splice(index, 1);
    return true;
  }


  remove() {
    // const index = 2;
    // const taskEL = this.tasksGridEl.nativeElement.children[index];
    // if (!taskEL) { return; }
    // const particlesOpts = {
    //   type: 'rectangle',
    //   style: 'stroke',
    //   size: 15,
    //   color: '#ddd',
    //   duration: 300,
    //   easing: [0.2, 1, 0.7, 1],
    //   oscillationCoefficient: 5,
    //   particlesAmountCoefficient: 2,
    //   direction: 'right'
    // };
    // const particles = new Particles(taskEL.children[0], particlesOpts);
    // particles.disintegrate();
    // setTimeout(() => { this.tasksGrid.remove(index, { removeElements: true }); }, 300);
  }


  openSnackBar(message: string, action: string, time = 1500) {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }

}
