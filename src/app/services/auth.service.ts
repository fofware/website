import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_URI } from '../shared/uris';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //  private URL = 'https://192.168.0.2:3000';
  private URL = AUTH_URI;

  constructor(
    private httpClient: HttpClient
    , private router: Router) { }

  signIn(user) {
    return this.httpClient.post<any>(this.URL + '/signin', user);
  }

  signUp(user) {
    return this.httpClient.post<any>(this.URL + '/signup', user);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
