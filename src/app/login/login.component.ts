import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// interface data {username, password};
export class LoginComponent {
  data = {email : "", password : ""};
  role = "SA"
EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
constructor(private _router : Router){}

onformsubmit(){
  
  if(this.data.email == "kartik" && this.data.password == "kartik"){
    var key = btoa(btoa(this.data.email) + "??" + btoa(this.data.password)  + "??" + btoa(this.role))  ; 
  document.cookie = "SessionId" + "=" + key;
    this._router.navigate(['/']);
    console.log(key);
  }
  else{
    alert('Wrong username/password');
    this._router.navigate(['/login']);
    this.data.email = "";
    this.data.password = "";
    console.log("eh")
    console.log(key);
  }
}



}
