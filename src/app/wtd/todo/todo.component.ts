import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  active = false;
  defTask = {
    tTitle: "Hellow ksk dkm ",
    // tDesc: "fg sk jn ds sm mds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm ds d ds sm mds d ds sm mds d ds sm mds dm k wss sjks djs"
  };

  @Input() task: any = this.defTask;

  constructor() { }

  ngOnInit() {
  }


  cl() {
    console.log("dd");
  }

}
