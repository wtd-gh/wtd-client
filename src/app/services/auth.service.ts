import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  S_DOMAIN,
  AUTH_URI,
  AUTH_REG_URI,
  AUTH_CHK_URI,
  UNAME_AVAIL_URI,
  EMAIL_AVAIL_URI,
} from '../config/server';
import { TOKEN_KEY } from '../config/localstorage';
import { handleErr } from '../helpers/err';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    const token: string = localStorage.getItem(TOKEN_KEY);
    return token;
  }

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  }

  async isLogin() {
    if (!this.getToken) {
      return false;
    }

    try {
      const res = await this.http.post<any>(
        S_DOMAIN + AUTH_CHK_URI,
        {},
        { observe: 'response' }
      ).toPromise();

      if (res.status === 200) {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  async login(data) {
    try {
      const res = await this.http.post<any>(
        S_DOMAIN + AUTH_URI,
        data,
        { observe: 'response' }
      ).toPromise();

      if (res.status === 200) {
        this.setToken(res.headers.get('x-auth'));
      }
      return res.body;
    } catch (err) {
      return handleErr(err);
    }
  }

  async logout() {
    this.removeToken();
  }

  async register(regData) {
    try {
      const res = await this.http.post<any>(
        S_DOMAIN + AUTH_REG_URI,
        regData,
        { observe: 'response' }
      ).toPromise();

      return res.body;
    } catch (err) {
      return handleErr(err);
    }
  }

  async isUnameAvail(uName: string) {
    try {
      const res = await this.http.post<any>(
        S_DOMAIN + UNAME_AVAIL_URI,
        { uName },
        { observe: 'response' }
      ).toPromise();

      return res.body;
    } catch (err) {
      return handleErr(err);
    }
  }

  async isEmailAvail(email: string) {
    try {
      const res = await this.http.post<any>(
        S_DOMAIN + EMAIL_AVAIL_URI,
        { email },
        { observe: 'response' }
      ).toPromise();

      return res.body;
    } catch (err) {
      return handleErr(err);
    }
  }

}
