import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  constructor() { }

  increase(slid, slidval) {
    if (slid.value >= 90) {
      slid.value += 5;
    } 
    else
      slid.value++;
    slidval.value = slid.value;
  }


  decrease(slid, slidval) {
    if (slid.value > 90) {
      slid.value -= 5;
    }
    else
      slid.value--;
    slidval.value = slid.value;
  }


  ngOnInit() {
  }

}
