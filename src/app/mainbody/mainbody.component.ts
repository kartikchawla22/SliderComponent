import { Component, OnInit } from '@angular/core';
import { CheckLogin } from '../cookie';
import { Router, Route, RouterModule } from '@angular/router'

import { RestfullService } from '../restfull.service';
// import '../back.jpg';
@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
role;


  constructor( private LoginLogout : CheckLogin, public _route: Router, public series : RestfullService) { }
arr = [];

url1 = "http://farm4.staticflickr.com/3290/3090990005_1177611ccb_o.jpg";
  ngOnInit() {
this.series.getseries().subscribe(res => {
      this.arr = res
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
this.role=this.LoginLogout.RoleCheck();  
}

}
