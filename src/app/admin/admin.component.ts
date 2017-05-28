import { Component, OnInit } from '@angular/core';
import { CheckLogin } from '../cookie';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(public Loginstatus : CheckLogin) {
  
  }


}
