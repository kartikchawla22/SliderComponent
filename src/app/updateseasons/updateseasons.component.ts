import { Component, OnInit } from '@angular/core';
import { RestfullService } from '../restfull.service';
import { CheckLogin } from '../cookie';

@Component({
  selector: 'app-updateseasons',
  templateUrl: './updateseasons.component.html',
  styleUrls: ['./updateseasons.component.css']
})
export class UpdateseasonsComponent implements OnInit {
    delseasonid: any; showform = 0;
counter = 0;
serieslist = [];
result;
addseason = {
  name :"",
  series_id : 0
}
checkpass = {
  password  : ""
}
 showdelform = 0;
    delformcounter = 0;
  constructor(public seasons : RestfullService, public check  : CheckLogin) { }
arr = [];
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getseasons();
}

  getseasons() {
    this.seasons.getseasons().subscribe(res => {
      this.arr = res
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
      this.seasons.getseries().subscribe(res => {
      this.serieslist = res
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }



del() {
    // this.deluser.id = id;
if(this.checkpass.password == this.check.Passcheck()){
    this.seasons.deleteseason(this.delseasonid).subscribe(res => {console.log("deleted"); this.getseasons(); this.showdelform = 0});
}
else{
  alert('wrong password');
  this.checkpass.password = "";
this.showdelform = 1;
}
  }



delformshow(id) {
  this.delseasonid = id;
    if (this.delformcounter % 2 == 0) {
      this.showdelform = 1;
      this.showform = 0;
      this.delformcounter++;
    }
    else
      this.showdelform = 0;

    this.delformcounter++;
  }



addseasons(){
if(this.counter%2 == 0){
  this.showform  = 1;
}
  else
  this.showform = 0;


this.counter ++;
}
addnewseasons(dd){
  this.addseason.series_id = dd;
  console.log(dd)
this.seasons.postseason(this.addseason).subscribe(res=>{this.result = res; this.getseasons(); this.showform = 0})


}
}
