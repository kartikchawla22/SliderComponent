import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor(private searchparam: ActivatedRoute) { }
search;
  ngOnInit() {
this.search = this.searchparam.snapshot.params['search'];
alert(this.search);
  }

}
