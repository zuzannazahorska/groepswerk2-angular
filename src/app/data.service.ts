import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  db = 'http://127.0.0.1:8000/api/users';
  constructor(private router: Router) {}

  registerUser(name: string, password: string, email: string) {
    fetch(this.db, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.status === 201) {
        alert('Registration successful');
        this.router.navigate(['/login']);
      } else {
        alert('Something went wrong.');
      }
    });
  }
}
