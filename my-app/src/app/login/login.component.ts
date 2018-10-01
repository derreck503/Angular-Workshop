import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: string;

  constructor() { }

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.message = 'Enter username and password';
  }

  submit() {
    this.message = `${this.username} successfully logged in`;
  }

}
