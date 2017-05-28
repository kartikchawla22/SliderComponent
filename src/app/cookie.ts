import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

export class CheckLogin{
private _router: Router
 isLoggedIn() : Boolean
{
    var x = document.cookie.split(';');
    var cookievalue;
    for (var i = 0; i < x.length; i++) {
      //  console.log(x[i].split('=')[0].trim()[0]);
      if (x[i].split('=')[0].trim() == "SessionId") {
        cookievalue = x[i].split('=')[1];
        break;
      }
    }

    if(cookievalue == undefined){
    //   this._router.navigate(['/']);
      return false;
    }
    else{
    // var res = atob(cookievalue).split('??');
    // if(atob(res[0]) == "kartik" && atob(res[1]) == "kartik"){
      // console.log(atob(res[0]));
      return true;
    }
    
  }
role ;
RoleCheck() : Observable<any>{
    var x = document.cookie.split(';');
    var cookievalue;
    for (var i = 0; i < x.length; i++) {
      if (x[i].split('=')[0].trim() == "SessionId") {
        cookievalue = x[i].split('=')[1];
        break;
      }
    }

    if(cookievalue == undefined){
      this.role = Observable.of("");
      return this.role;
    }
    else{
    var res = atob(cookievalue).split('??');
      console.log(atob(res[2]));
      this.role =  Observable.of(atob(res[2]));
      return this.role;
      
}

  }}