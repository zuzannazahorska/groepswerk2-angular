import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn(): boolean {
    return !!window.localStorage.getItem('username');
  }

  logOut() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('userId');
  }

  constructor() {}
}
