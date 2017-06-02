import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { CheckLogin } from './cookie';
import { Configuration } from './config';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AdminauthService implements CanActivate {
  check1():Observable<any>{
   var y = this.config.roles.x;
   var z = this.check.RoleCheck()
  if(z == y[0] || z == y[1])
  return Observable.of(true);
  else
  return Observable.of(false);
}

  canActivate(){
   var localsubscription =  this.check1()
 return localsubscription.map(value => {
  //  this.subscription.unsubscribe();
  console.log(value,"hello")
  if(this.check.isLoggedIn() && value )
  {
    return true;
  }
  else{
    this.router.navigate(['/']);
    return false;
  }
 });
  }

  constructor(public check : CheckLogin, public router : Router, public config : Configuration) { }

}
