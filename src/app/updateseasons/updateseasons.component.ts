import { Component, OnInit } from '@angular/core';
import { RestfullService } from '../restfull.service';


@Component({
  selector: 'app-updateseasons',
  templateUrl: './updateseasons.component.html',
  styleUrls: ['./updateseasons.component.css']
})
export class UpdateseasonsComponent implements OnInit{showform = 0;
counter = 0;
serieslist = [];
result;
addseason = {
  name :"",
  series_id : 0
}
  constructor(public seasons : RestfullService) { }
arr = [];
  ngOnInit() {
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
this.seasons.postseason(this.addseason).subscribe(res=>{this.result = res})


}
}
