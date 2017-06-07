import { Component, OnInit } from '@angular/core';
import { RestfullService } from '../restfull.service';
import { CheckLogin } from '../cookie';


@Component({
  selector: 'app-updatecomics',
  templateUrl: './updatecomics.component.html',
  styleUrls: ['./updatecomics.component.css']
})
export class UpdatecomicsComponent implements OnInit {
    comicid = 0;
    seasonlist: any;
    updateformcounter = 0;
  showupdateform = 0;
  delcomicid: any; showform = 0;
  counter = 0;
  serieslist = [];
  result;
  addcomic = {
    name: "",
    series_id: 0,
    season_id: 0
  }
  checkpass = {
    password: ""
  }
  showdelform = 0;
  delformcounter = 0;
updatecomicform = {
    name: "",
    season_id: 0,
    series_id: 0,
    comic_id : 0
  };

  constructor(public comics: RestfullService, public check: CheckLogin) { }
  arr = [];
  ngOnInit() {
    this.getcomics();
  }

  getcomics() {
    this.comics.getcomics().subscribe(res => {
      this.arr = res
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
    this.comics.getseries().subscribe(res => {
      this.serieslist = res
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
this.comics.getseasons().subscribe(res => {
      this.seasonlist = res
    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
      
  }



  del() {
    if (this.checkpass.password == this.check.Passcheck()) {
      this.comics.deletecomics(this.delcomicid).subscribe(res => { console.log("deleted"); this.getcomics(); this.showdelform = 0 });
    }
    else {
      alert('wrong password');
      this.checkpass.password = "";
      this.showdelform = 1;
    }
  }



  delformshow(id) {
    this.delcomicid = id;
    if (this.delformcounter % 2 == 0) {
      this.showdelform = 1;
      this.showform = 0;
      this.delformcounter++;
    }
    else
      this.showdelform = 0;

    this.delformcounter++;
  }



  addcomics() {
    if (this.counter % 2 == 0) {
      this.showform = 1;
    }
    else
      this.showform = 0;


    this.counter++;
  }
  addnewcomics(dd, dd2) {
    this.addcomic.series_id = dd;
    this.addcomic.season_id = dd2;
    console.log(dd)
    this.comics.postcomics(this.addcomic).subscribe(res => { this.result = res; this.getcomics(); this.showform = 0 })
  }

  update(id) {
    this.comicid = id;
    if (this.updateformcounter % 2 == 0) {
      this.showupdateform = 1;
      this.showform = 0;
    }
    else
      this.showdelform = 0;


    this.updateformcounter++;
  }


  updatecomics(dd, dd2) {

    this.updatecomicform.comic_id = this.comicid;
    this.updatecomicform.series_id = dd;
    this.updatecomicform.season_id = dd2;
    console.log(this.updatecomicform)
    this.comics.updatecomics(this.updatecomicform).subscribe(res => { this.result = res; this.getcomics(); this.showupdateform = 0; });
    this.showupdateform = 0;
  }
}