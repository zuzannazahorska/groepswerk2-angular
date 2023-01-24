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

  //register() {
  //console.log('name: ' + this.name);
  //this.dataService.register(this.name, this.email, this.password);
  //}

  ngOnInit(): void {}
}
