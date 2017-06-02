import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {  RestfullService } from '../restfull.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// interface data {username, password};
export class LoginComponent {
  data = {email : "", password : ""};
  role;
  check;
  result;
EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
constructor(private _router : Router, public rest : RestfullService){}

 onformsubmit(){
this.rest.checkusers(this.data).subscribe(res => {
      this.result=res;
      this.checkrole()
      console.log(this.result);
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });}
     // console.log(this.result + "this is result");
checkrole(){
  if(this.result.role){
    var key = btoa(btoa(this.data.email) + "??" + btoa(this.data.password)  + "??" + btoa(this.result.role))  ; 
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
