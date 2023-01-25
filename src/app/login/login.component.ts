import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.username = '';
    this.password = '';
  }

  login() {
    this.dataService.getUsersFromApi(this.username, this.password);
  }
  ngOnInit() {}
}
