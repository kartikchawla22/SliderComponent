import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Configuration } from './config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestfullService {

  constructor(private httpService: Http, public Url: Configuration) { }

getusers() :Observable<any> {
return this.httpService.get(this.Url.URLS.getusers).map(data=>data = data.json());
}

getseries() :Observable<any> {
return this.httpService.get(this.Url.URLS.getseries).map(data=>data = data.json());
}
getseasons() :Observable<any> {
return this.httpService.get(this.Url.URLS.getseason).map(data=>data = data.json());
}
getcomics() :Observable<any> {
return this.httpService.get(this.Url.URLS.getcomics).map(data=>data = data.json());
}
search(sdata) :Observable<any> {
return this.httpService.get(this.Url.URLS.getusers + sdata).map(data=>data = data.json());
}

checkusers(Form) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Form);

    return this.httpService.post(this.Url.URLS.checkusers, Form, headers).map((res: Response) => res.json());
  }



}
