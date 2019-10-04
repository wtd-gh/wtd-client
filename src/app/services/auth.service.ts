import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { S_DOMAIN, AUTH_CHK_URI } from '../config/server';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  async isLogin() {
    const res = await this.http.post<any>(
      S_DOMAIN + AUTH_CHK_URI,
      { },
      { observe: 'response' }
      ).toPromise();

    console.log(res);
    return 1;
  }
}
