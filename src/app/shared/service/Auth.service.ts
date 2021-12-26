import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PortalUtil } from './PortalUtil.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = PortalUtil.getHttpOptions();
  apiUrl = PortalUtil.getApiUrl();

  constructor(private httpClient: HttpClient) {
    this.httpOptions = PortalUtil.getHttpOptions();
  }

  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(){
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('access_token');
    this.loggedIn.next(false);
  }

  public validateLogin(user: any): Observable<String> {
    return this.httpClient.post<any>(this.apiUrl + '/auth/login', user, this.httpOptions);
  }

  public tokenAvailable(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
