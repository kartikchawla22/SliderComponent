import { Component, OnInit } from '@angular/core';
import { CheckLogin } from '../cookie';
import { Configuration } from '../config';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private LoginLogout : CheckLogin, public config : Configuration) {
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

check(x):Observable<any>{
   var y = this.config.roles.x;
   var z = this.LoginLogout.RoleCheck()
  if(z == y[0] || z == y[1])
  return Observable.of(true);
  else
  return Observable.of(false);
}
checksa(x):Observable<any>{
   var y = this.config.roles.x;
   var z = this.LoginLogout.RoleCheck()
  if(z == y[0])
  return Observable.of(true);
  else
  return Observable.of(false);
  }

  ngOnInit() {
  }

}
