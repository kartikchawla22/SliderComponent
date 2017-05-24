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
step=2;
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
    // console.log(this.items.length);
  }


  decrease(slid, slidval) {
   if (slid.value >= 90) {
      this.step =5;
    } 
    else
    {this.step = 2;
    }
 
  slid.value--;
  // console.log(slid.value);
    slidval.value = slid.value;
  }



  ngOnInit() {
  }

}
