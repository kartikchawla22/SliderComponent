import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  constructor() {
    // this.items.length = 20;
   }
items = [];
  increase(slid, slidval) {
    if (slid.value >= 90) {
      slid.value+=5;
    } 
    else
     { 
      slid.value+=2;
    }
    slidval.value = slid.value;
  }


  d(slid, slidval){
      if (slid.value >90) {
      slid.value-=5;
    } 
    else
     {
      slid.value-=2;
    }
    slidval.value = slid.value;
  }


  ngOnInit() {
  }

}
