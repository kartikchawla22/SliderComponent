import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { CheckLogin } from './cookie';
import { Configuration } from './config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthserviceService implements CanActivate {


check1(x):Observable<any>{
   var y = this.config.roles.x;
   var z = this.check.RoleCheck()
  if(z == y[0] || z == y[1])
  return Observable.of(true);
  else
  return Observable.of(false);
}

checksa():Observable<boolean>{
   var y = this.config.roles.x;
   var z = this.check.RoleCheck();
   console.log(y[0], "this is checksa")
  if(z == y[0])
  return Observable.of(true);
  else
  return Observable.of(false);
}

canActivate(){
 var localsubscription =  this.checksa()
 return localsubscription.map(value => {
  //  this.subscription.unsubscribe();
  console.log(value,"hello")
  if(this.check.isLoggedIn() && value )
  {
    console.log(this.checksa() , "this is can")
    return true;
  }
  else{
    console.log(this.checksa() , "this is can false ")
    this.router.navigate(['/']);
    return false;
  }
 });
}
  constructor(public check : CheckLogin, public router : Router, public config : Configuration) { }

}
