import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  name: string;
  password: string;
  email: string;

  constructor(private dataService: DataService) {
    this.name = '';
    this.password = '';
    this.email = '';
  }

  registerUser() {
    this.dataService.registerUser(this.name, this.password, this.email);
  }

  ngOnInit(): void {}
}
