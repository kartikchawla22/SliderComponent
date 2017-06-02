import { Component, OnInit } from '@angular/core';
import { RestfullService } from '../restfull.service';
import { CheckLogin } from '../cookie';


@Component({
  selector: 'app-updateseries',
  templateUrl: './updateseries.component.html',
  styleUrls: ['./updateseries.component.css']
})
export class UpdateseriesComponent implements OnInit {
    showdelform = 0;
    delformcounter = 0;
showform = 0;

counter = 0;
seriesform = {};
delseriesid : 0;
checkpass = {
    password: ""
  }
  constructor(public series : RestfullService , public check : CheckLogin) { }
arr = [];
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getseries();
}
  getseries() {
    this.series.getseries().subscribe(res => {
      this.arr = res
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }


del() {
    // this.deluser.id = id;
if(this.checkpass.password == this.check.Passcheck()){
    this.series.deleteseries(this.delseriesid).subscribe(res => {console.log("deleted"); this.getseries(); this.showdelform = 0});
}
else{
  alert('wrong password');
  this.checkpass.password = "";
this.showdelform = 1;
}
  }



delformshow(id) {
  this.delseriesid = id;
    if (this.delformcounter % 2 == 0) {
      this.showdelform = 1;
      this.showform = 0;
      this.delformcounter++;
    }
    else
      this.showdelform = 0;

    this.delformcounter++;
  }

addseries(){
if(this.counter%2 == 0){
  this.showform  = 1;
this.showdelform = 0;
}
  else
  this.showform = 0;


this.counter ++;
}
addnewseries(){
  this.series.postseries(this.seriesform).subscribe(res =>{
    console.log(res);
    this.getseries();
    this.showform = 0;
  });
// console.log(form.value , " this is dd");
}
}
