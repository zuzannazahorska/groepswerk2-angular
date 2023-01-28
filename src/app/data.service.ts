import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as bcrypt from 'bcryptjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  db = 'http://127.0.0.1:8000/api/users/';
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}

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
        this.toastr.success('Registration successful!');
        this.router.navigate(['/login']);
      } else {
        this.toastr.error('Something went wrong. Please try again.');
      }
    });
  }

  //log in
  getUsersFromApi(name: string, password: string) {
    this.http
      .get<{ name: string }>(`${this.db}${name}`)
      .toPromise()
      .then((data) => {
        if (data?.name) {
          fetch(this.db + name)
            .then((response) => response.json())
            .then((data) => {
              bcrypt.compare(password, data.password, (_err, res) => {
                if (res) {
                  window.localStorage.setItem('username', name);
                  window.localStorage.setItem('userId', data.id);
                  this.router.navigate(['/main']);
                } else {
                  this.toastr.error('Wrong password!');
                }
              });
            });
        } else {
          this.toastr.error('Wrong username!');
        }
      });
  }

  //get all recipes
  getRecipesFromApi() {
    return fetch('http://127.0.0.1:8000/api/recipes').then((response) => {
      console.log(response);
      return response.json();
    });
  }

  //get all recipes
  getRecipeDetail(id: string) {
    return fetch('http://127.0.0.1:8000/api/recipes/instructions/' + id).then(
      (response) => {
        console.log(response);
        return response.json();
      }
    );
  }
  getIngredientsFromApi(search: any) {
    return fetch('http://127.0.0.1:8000/api/ingredients/' + search).then(
      (response) => {
        console.log(response);
        return response.json();
      }
    );
  }
  /*getVeganFromApi() {
    return fetch('http://127.0.0.1:8000/api/diet_recipe/' + id).then(
      (response) => {
        console.log(response);
        return response.json();
      }
    );
  }*/
}
