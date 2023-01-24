import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private dataService: DataService, private router: Router) {
    this.username = '';
    this.password = '';
  }

  // login() {
  //   this.dataService.getUsersFromApi(this.username, this.password);
  // }

  ngOnInit() {}
}
