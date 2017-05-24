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
step=1;
items = [];
  increase(slid, slidval) {
    if (slid.value >= 90) {
      this.step =5;
      slid.value += 5;
    } 
    else
    {this.step = 1;
      slid.value++;
    }
    slidval.value = slid.value;
    console.log(this.items.length);
  }


  decrease(slid, slidval) {
    if (slid.value > 90) {
      slid.value -= 5;
      this.step =5;
    }
    else
    {
      this.step = 1;
      slid.value--;
    }
    slidval.value = slid.value;
  }


  ngOnInit() {
  }

}
