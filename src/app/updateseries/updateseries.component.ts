import { Component, OnInit } from '@angular/core';
import { RestfullService } from '../restfull.service';

@Component({
  selector: 'app-updateseries',
  templateUrl: './updateseries.component.html',
  styleUrls: ['./updateseries.component.css']
})
export class UpdateseriesComponent implements OnInit {
showform = 0;
counter = 0;
seriesform = {};
  constructor(public series : RestfullService) { }
arr = [];
  ngOnInit() {
    this.series.getseries().subscribe(res => {
      this.arr = res
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }

addseries(){
if(this.counter%2 == 0){
  this.showform  = 1;
}
  else
  this.showform = 0;


this.counter ++;
}
addnewseries(){
  this.series.postseries(this.seriesform).subscribe(res =>{
    console.log(res);
  });
// console.log(form.value , " this is dd");
}
}
