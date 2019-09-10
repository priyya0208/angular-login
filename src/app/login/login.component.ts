import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password:string;
  constructor() { }

  ngOnInit() {
  }
  login(){
    if(this.email == "user@gmail.com" && this.password == "password")
    {
      alert("Logged in Successfully");
    }
    else {
      alert("username or password incorrect");
    }
  }

}