import { Component, OnInit } from '@angular/core';
import { CheckLogin } from '../cookie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private LoginLogout : CheckLogin) {
   }
   role;
   opac = 0.2;
   Logout(){
     document.cookie = 'SessionId' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
     
  
   }
mouseenter(){
  this.opac = 0.7;
}
mouseleave(){
  this.opac = 0.2;
}
  ngOnInit() {
    this.LoginLogout.RoleCheck().subscribe(role =>{this.role = role;});
}

}
