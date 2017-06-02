import { Component, OnInit } from '@angular/core';
import { CheckLogin } from '../cookie';
import { RestfullService } from '../restfull.service';
import { SelectModule } from 'angular2-select';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user = [];
  showform = 0;
  counter = 0;
  adduserform = {
    email : "",
    password : "",
    role :  ""
  };
  result;
  deluser = {id  : 0};
  constructor(public Loginstatus: CheckLogin, public users: RestfullService) {

  }
  del(id) {
    this.deluser.id = id;
    console.log(this.deluser);
    this.users.deleteuser(this.deluser).subscribe(res => {console.log("deleted")});

  }

  addUser() {
    if (this.counter % 2 == 0) {
      this.showform = 1;
    }
    else
      this.showform = 0;


    this.counter++;
  }
  getusers(){
    this.users.getusers().subscribe(res => { this.user = res });
  }
  addnewuser(dd) {
    console.log(dd);
    this.adduserform.role = dd;
    this.users.postusers(this.adduserform).subscribe(res=>{this.result = res; this.getusers();});
    // this.users.getusers().subscribe(res => { this.user = res });
    // console.log(form.valid , " this is dd");
    
  }

  ngOnInit() {
    this.getusers();
  }

}
