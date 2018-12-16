import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup,FormControl, Validators }   from '@angular/forms';
import {Router} from '@angular/router';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  userPassword:string;
  securityCode:string;
  loginForm = new FormGroup({
    userName: new FormControl(''),
    userPassword: new FormControl(''),
    securityCode:new FormControl('',Validators.minLength(2))
  });
  constructor(private router:Router) { 
    
  }

  ngOnInit() {
  }


  login(){
    if(this.loginForm.get('userName').value=="admin" && this.loginForm.get('userPassword').value=="password"){
      console.log("Valid credential");
      this.router.navigate(["home"]);
    }else {
      console.log("In Valid credential")
      alert("Invalid credentials");
    }
 
  }
  
}
