import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// interface data {username, password};
export class LoginComponent {
  data = {username : "", password : ""};
  role = "SA"
constructor(private _router : Router){}
onformsubmit(){
  
  if(this.data.username == "kartik" && this.data.password == "kartik"){
    var key = btoa(btoa(this.data.username) + "??" + btoa(this.data.password)  + "??" + btoa(this.role))  ; 
  document.cookie = "SessionId" + "=" + key;
    this._router.navigate(['/']);
    console.log(key);
  }
  else{
    alert('Wrong username/password');
    this._router.navigate(['/login']);
    this.data.username = "";
    this.data.password = "";
    console.log("eh")
    console.log(key);
  }
}



}
