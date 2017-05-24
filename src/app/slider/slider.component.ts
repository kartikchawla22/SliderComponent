import { Component, OnInit } from '@angular/core';
// import {Ng2StyledDirective, IStyledConfig, ISkinable} from 'ng2-styled-directive/ng2-styled.directive';
import { Ng2SliderComponent } from 'ng2-slider-component/ng2-slider.component';
import { SlideAbleDirective } from 'ng2-slideable-directive/slideable.directive';
import { Ng2StyledDirective } from 'ng2-styled-directive/ng2-styled.directive';


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
