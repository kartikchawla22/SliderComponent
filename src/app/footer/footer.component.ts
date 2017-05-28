import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
opac = 0.2;
mouseenter(){
  this.opac = 0.7;
}
mouseleave(){
  this.opac = 0.2;
}
  ngOnInit() {
  }

}
