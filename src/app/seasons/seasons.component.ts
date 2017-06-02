import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
import { RestfullService } from '../restfull.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
    id: any;
route;
  constructor(public activatedid :ActivatedRoute, public season : RestfullService ) 
  
  {

    
   }
arr = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];
  ngOnInit() {
    this.id = this.activatedid.snapshot.params['i'];
    this.route = "/series/" + this.id;

this.season.getseasonsbyid(this.id).subscribe(res => {
      this.arr = res
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }

}
