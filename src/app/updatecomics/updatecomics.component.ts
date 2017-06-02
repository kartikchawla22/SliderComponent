import { Component, OnInit } from '@angular/core';
import { RestfullService } from '../restfull.service';


@Component({
  selector: 'app-updatecomics',
  templateUrl: './updatecomics.component.html',
  styleUrls: ['./updatecomics.component.css']
})
export class UpdatecomicsComponent implements OnInit {

  constructor(public series : RestfullService) { }
arr = [];
  ngOnInit() {
    this.series.getcomics().subscribe(res => {
      this.arr = res
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }

}