import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

export class CheckLogin {
  private _router: Router
  isLoggedIn(): Boolean {
    var x = document.cookie.split(';');
    var cookievalue;
    for (var i = 0; i < x.length; i++) {
      //  console.log(x[i].split('=')[0].trim()[0]);
      if (x[i].split('=')[0].trim() == "SessionId") {
        cookievalue = x[i].split('=')[1];
        break;
      }
    }

    if (cookievalue == undefined) {
      //   this._router.navigate(['/']);
      return false;
    }
    else {
      // var res = atob(cookievalue).split('??');
      // if(atob(res[0]) == "kartik" && atob(res[1]) == "kartik"){
      // console.log(atob(res[0]));
      return true;
    }

  }
  role;
  RoleCheck(): String {
    var x = document.cookie.split(';');
    var cookievalue;
    for (var i = 0; i < x.length; i++) {
      if (x[i].split('=')[0].trim() == "SessionId") {
        cookievalue = x[i].split('=')[1];
        break;
      }
    }

    if (cookievalue == undefined) {
      this.role = "";

    }
    else {
      var res = atob(cookievalue).split('??');
      console.log(atob(res[2]));
      this.role = atob(res[2]);
    }
    return this.role;
  }


pass;
  Passcheck(): String {
    var x = document.cookie.split(';');
    var cookievalue;
    for (var i = 0; i < x.length; i++) {
      if (x[i].split('=')[0].trim() == "SessionId") {
        cookievalue = x[i].split('=')[1];
        break;
      }
    }

    if (cookievalue == undefined) {
      this.pass = "";

    }
    else {
      var res = atob(cookievalue).split('??');
      this.pass = atob(res[1]);
    }
    return this.pass;
  }
tokenvalue;
token(): String{
 var x = document.cookie.split(';');
    var cookievalue;
    for (var i = 0; i < x.length; i++) {
      if (x[i].split('=')[0].trim() == "SessionId") {
        cookievalue = x[i].split('=')[1];
        break;
      }
    }

    if (cookievalue == undefined) {
      this.tokenvalue = "";

    }
    else {
      var res = atob(cookievalue).split('??');
      this.tokenvalue = atob(res[3]);
    }
    return this.tokenvalue;
  }
}

  