import { Component, OnInit } from '@angular/core';
import { CheckLogin } from '../cookie';
// import '../back.jpg';
@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
role;


  constructor( private LoginLogout : CheckLogin) { }
arr = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];
  ngOnInit() {
this.role=this.LoginLogout.RoleCheck();  
}

}
