import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
    id: any;
route;
  constructor(public activatedid :ActivatedRoute ) 
  
  {

    this.id = this.activatedid.snapshot.params['i'];
    this.route = "/series/" + this.id;
   }
arr = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];
  ngOnInit() {
  }

}
