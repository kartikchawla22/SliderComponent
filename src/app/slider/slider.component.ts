import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  constructor() {
    this.items.length = 22;
   }
step = 1;
items = [];
  increase(slid, slidval) {
    if (slid.value >= 90) {
      this.step = 5;
    } 
    else
    {this.step = 2;
    }
    slid.value++;
    slidval.value = slid.value;
    
  }


  d(slid, slidval){
      if (slid.value >= 90) {
      this.step = 5;
    } 
    else
    {this.step = 1;
    }
    slid.value-=2;
    slidval.value = slid.value;
  }


  ngOnInit() {
  }

}
