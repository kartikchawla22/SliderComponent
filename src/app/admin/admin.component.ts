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
    showupdateform = 0;
    updateformcounter = 0;
    userid: any;
    subscribeUser: any;
    showdelform: number;
  user = [];
  showform = 0;
  counter = 0;
  adduserform = {
    email : "",
    password : "",
    role :  ""
  };

  updateuserform = {
    email : "",
    password : "",
    role :  "",
    id : 0
  };
  checkpass = {
    password: ""
  }
  delformcounter = 0;
  result;
  deluserid : 0;
  constructor(public Loginstatus: CheckLogin, public users: RestfullService) {

  }
  del() {
    // this.deluser.id = id;
if(this.checkpass.password == this.Loginstatus.Passcheck()){
    this.users.deleteuser(this.deluserid).subscribe(res => {console.log("deleted"); this.getusers(); this.showdelform = 0});
}
else{
  alert('wrong password');
  this.checkpass.password = "";
this.showdelform = 1;
}
  }

  addUser() {
    if (this.counter % 2 == 0) {
      this.showform = 1;
      this.showdelform = 0;
    }
    else
      this.showform = 0;


    this.counter++;
  }


delformshow(id) {
  this.deluserid = id;
    if (this.delformcounter % 2 == 0) {
      this.showdelform = 1;
      this.showform = 0;
    }
    else
      this.showdelform = 0;


    this.delformcounter++;
  }

  getusers(){
    if(this.subscribeUser != null){
      this.subscribeUser.unsubscribe();
    }
    this.subscribeUser = this.users.getusers().subscribe(res => { this.user = res });
  }
  addnewuser(dd) {
    console.log(dd);
    this.adduserform.role = dd;
    this.users.postusers(this.adduserform).subscribe(res=>{this.result = res; this.getusers(); this.showform = 0; console.log(res);this.users.setrandom(res.body.random)  });
    // this.users.getusers().subscribe(res => { this.user = res });
    // console.log(form.valid , " this is dd");
    
  }

  ngOnInit() {
    this.getusers();
  }



update(id)
{
  this.userid = id;
    if (this.updateformcounter % 2 == 0) {
      this.showupdateform = 1;
      this.showform = 0;
    }
    else
      this.showdelform = 0;


    this.delformcounter++;
  }

updateuser(dd){

    this.updateuserform.role = dd;
    this.updateuserform.id = this.userid;
    console.log(this.updateuserform)
    this.users.updateuser(this.updateuserform).subscribe(res=>{this.result = res; this.getusers(); this.showform = 0;});
    this.showupdateform = 0;
}
}




