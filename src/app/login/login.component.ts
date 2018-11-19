import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdata;
  username;
  constructor(private router:Router) { }

  ngOnInit() {
    this.userdata=new FormGroup({
    username: new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])),
    password: new FormControl("",this.passwordvalidation)
    });
  }
  
  passwordvalidation(formcontrol){
    if(formcontrol.value.length<5){
      return{"password":true};
    }
  }

  onSubmit(data){
    console.log(data.username);
    {this.username=data.username;}
    if(data.username=="arpitha.r.227@gmail.com" && data.password=="arpi12345"){
      alert("Login Successful");
      this.router.navigate(['app-mainpage'])
    }
    else{
     alert("Invalid Login")
    return false;
    }
  }
}
