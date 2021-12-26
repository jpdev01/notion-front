import { HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortalUtil {

  static baseUrl: string;
  private static apiUrl: string = "http://localhost:8080/neusamoda";
  private static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ` + PortalUtil.getToken()
    }),
    params: new HttpParams()
  };
  static icoms = new EventEmitter<any>();

  constructor() {
    PortalUtil.baseUrl = window.location.origin;
  }

  static getApiUrl(): string {
    return this.apiUrl;
  }

  public static addParam(param: HtppRequestParam): void {
    PortalUtil.httpOptions.params.append(param.key, param.value);
  }

  public static setParam(param: HttpParams): void {
    PortalUtil.httpOptions.params = param;
  }

  static setToken(newToken: string): void {
    //PortalUtil.setToken(newToken);
    PortalUtil.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + newToken
      }),
      params: new HttpParams().append("category", "1")
    };
  }

  public static getHttpOptions(): { headers: HttpHeaders; } {
    return PortalUtil.httpOptions;
  }

  static getToken() {
    return localStorage.getItem('access_token');
  }

  static removeToken() {
    localStorage.removeItem('access_token');
  }
}

class HtppRequestParam {
  key: string;
  value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}
