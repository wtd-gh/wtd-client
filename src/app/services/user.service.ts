import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  S_DOMAIN,
  WTD_URI,
  ALL_TASKS_URI,
  DEC_WORK_URI,
  ADD_TASK_URI,
  DEL_TASK_URI,
  QUOTE_URL
} from '../config/server';
import { handleErr } from '../helpers/err';
import { BehaviorSubject } from 'rxjs';
import { QUOTE, Q_AUTHOR, LAST_QUOTE_REFRESH } from '../config/localstorage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  taskAdded: BehaviorSubject<any> = new BehaviorSubject(false);

  getName(onlyFirst = false) {
    let name: string = localStorage.getItem('name');
    if (onlyFirst) {
      name = name.split(' ')[0];
    }
    return name;
  }

  saveQuote(qod) {
    localStorage.setItem(LAST_QUOTE_REFRESH, String(new Date()));
    localStorage.setItem(QUOTE, qod.q);
    localStorage.setItem(Q_AUTHOR, qod.a);
  }

  loadQuote() {
    return {
      q: localStorage.getItem(QUOTE),
      a: localStorage.getItem(Q_AUTHOR)
    };
  }

  needUpdateQuote() {
    if (!localStorage.getItem(LAST_QUOTE_REFRESH)) {
      return true;
    }
    const lqr = new Date(localStorage.getItem(LAST_QUOTE_REFRESH)).getTime();
    const d = new Date().getTime();
    if (d - lqr > 24 * 3600 * 1000) {
      return true;
    } else {
      return false;
    }
  }

  async getQuote() {
    try {
      if (this.needUpdateQuote()) {
        const res = await this.http.get<any>(
          QUOTE_URL,
          { observe: 'response' }
        ).toPromise();
        const qod = { q: res.body.contents.quotes[0].quote, a: res.body.contents.quotes[0].author };
        this.saveQuote(qod);
        return qod;
      } else {
        return this.loadQuote();
      }
    } catch (err) {
      return -1;
    }
  }

  async getAllTasks() {
    try {
      const res = await this.http.get<any>(
        S_DOMAIN + ALL_TASKS_URI,
        { observe: 'response' }
      ).toPromise();

      return res.body;
    } catch (err) {
      return handleErr(err);
    }
  }

  async WTD(mins) {
    try {
      const res = await this.http.post<any>(
        S_DOMAIN + WTD_URI,
        { mins },
        { observe: 'response' }
      ).toPromise();

      return res.body;
    } catch (err) {
      return handleErr(err);
    }
  }

  async decWork(taskId, decAmount) {
    try {
      const res = await this.http.post<any>(
        S_DOMAIN + DEC_WORK_URI,
        { tId: taskId, decAmount },
        { observe: 'response' }
      ).toPromise();

      return res.body;
    } catch (err) {
      return handleErr(err);
    }
  }

  async deleteTask(taskId) {
    try {
      const res = await this.http.post<any>(
        S_DOMAIN + DEL_TASK_URI,
        { tId: taskId },
        { observe: 'response' }
      ).toPromise();

      return res.body;
    } catch (err) {
      return handleErr(err);
    }
  }

  async addTask(task) {
    try {
      const res = await this.http.post<any>(
        S_DOMAIN + ADD_TASK_URI,
        {
          tName: task.tName,
          tDesc: task.tDesc,
          tQuanta: task.tQuanta,
          tWorkHrs: task.tWorkHrs,
          tDeadline: task.tDeadline
        },
        { observe: 'response' }
      ).toPromise();
      this.taskAdded.next(res.body);
      this.taskAdded.next(null);
      return res.body;
    } catch (err) {
      return handleErr(err);
    }
  }

}
