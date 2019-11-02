import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';
import * as Muuri from 'muuri';

declare var Particles: any;

@Component({
  selector: 'app-zoom-out',
  templateUrl: './zoom-out.component.html',
  styleUrls: ['./zoom-out.component.scss']
})

export class ZoomOutComponent implements OnInit {
  @ViewChild('tempTaskEl', { read: ElementRef, static: false }) tempTaskEl: ElementRef;
  @ViewChild('tasksGridEl', { read: ElementRef, static: false }) tasksGridEl: ElementRef;
  @ViewChild('tempTemplate', { read: TemplateRef, static: false }) tempTemplate: TemplateRef<any>;
  @ViewChild('tempVC', { read: ViewContainerRef, static: false }) tempVC: ViewContainerRef;

  name = 'Shivam';
  loading = true;
  counter = 5;
  tasksList: any;
  tasksGrid: any;

  componentRef: any;
  isTempTask = false;

  constructor() { }


  ngOnInit() {
    this.tasksGrid = new Muuri.default('.t-grid', {
      dragEnabled: false,
      layoutDuration: 400,
      layoutEasing: 'ease',
      layout: {
        fillGaps: false,
        horizontal: false,
        alignRight: false,
        alignBottom: false,
        rounding: false
      }
    });


  }

  ngAfterViewInit() {
    this.loadInitials().then(ret => {
      setTimeout(() => {this.tasksGrid.synchronize(); this.stopLoad()}, 0);
    });
  }

  stopLoad() {
    this.loading = false;
  }

  loadInitials() {
    return Promise.resolve((() => {
      for (let i = 0; i < 50; i++) {
         this.addTask();
      }
      return 'from first'; // return whatever you want not neccessory
    })());
  }

  addTask() {
    const view = this.tempTemplate.createEmbeddedView(null);
    this.tempVC.insert(view, 0);
    setTimeout(() => { this.add(); }, 0);
  }

  add() {
    const tTask = this.tempTaskEl.nativeElement.children[0];
    // tTask.children[0].classList.add('animate-zoomin');
    this.tasksGrid.add(tTask, { index: 0 });

    // setTimeout(() => { tTask.children[0].classList.remove('animate-zoomin'); }, 500);
    // this.tasksGrid.synchronize();
    // this.tasksGrid.refreshItems();
  }

  remove() {
    const index = 2;
    const taskEL = this.tasksGridEl.nativeElement.children[index];
    if (!taskEL) { return; }
    const particlesOpts = {
      type: 'rectangle',
      style: 'stroke',
      size: 15,
      color: '#ddd',
      duration: 300,
      easing: [0.2, 1, 0.7, 1],
      oscillationCoefficient: 5,
      particlesAmountCoefficient: 2,
      direction: 'right'
    };
    const particles = new Particles(taskEL.children[0], particlesOpts);
    particles.disintegrate();
    setTimeout(() => { this.tasksGrid.remove(index, { removeElements: true }); }, 300);
  }

}
