import { Component, OnInit } from '@angular/core';
import { RestfullService } from '../restfull.service';
import { Configuration } from '../config';
import { Http, RequestOptions, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {

  constructor(public verify : RestfullService, public config : Configuration, public httpserive : Http ) { }
random;
  ngOnInit() {
// this.random = this.verify.getrandom();
this.random = localStorage.getItem("random");
console.log(this.random);
let verifyurl = this.config.URLS.verify + this.random
console.log(verifyurl)
this.httpserive.get(verifyurl).subscribe(res => res = res.json());

  }

}
