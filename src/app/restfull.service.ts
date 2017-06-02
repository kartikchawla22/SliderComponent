import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Configuration } from './config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestfullService {

  constructor(private httpService: Http, public Url: Configuration) { }

  getusers(): Observable<any> {
    return this.httpService.get(this.Url.URLS.getusers).map(data => data = data.json());
  }

  getseries(): Observable<any> {
    return this.httpService.get(this.Url.URLS.getseries).map(data => data = data.json());
  }
  getseasons(): Observable<any> {
    return this.httpService.get(this.Url.URLS.getseason).map(data => data = data.json());
  }
  getcomics(): Observable<any> {
    return this.httpService.get(this.Url.URLS.getcomics).map(data => data = data.json());
  }



getseasonsbyid(id): Observable<any>{
return this.httpService.get(this.Url.URLS.getseasonbyid + id).map(data=>data = data.json());
}

getcomicsbyid(id): Observable<any>{
return this.httpService.get(this.Url.URLS.getcomicsbyid + id).map(data=>data = data.json());
}




  search(sdata): Observable<any> {
    return this.httpService.get(this.Url.URLS.getusers + sdata).map(data => data = data.json());
  }

  checkusers(Form): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Form);
    return this.httpService.post(this.Url.URLS.checkusers, Form, headers).map((res: Response) => res.json());
  }

deleteuser(id) : Observable<any>{
  console.log(id , "id del");
return this.httpService.delete(this.Url.URLS.getusers + '/' +  id).map((res : Response) => res.json());
}

deleteseason(id) : Observable<any>{
return this.httpService.delete(this.Url.URLS.getseason + '/' +  id).map((res : Response) => res.json());
}
deleteseries(id) : Observable<any>{
  console.log(id , "serires id")
return this.httpService.delete(this.Url.URLS.getseries + '/' +  id).map((res : Response) => res.json());
}
deletecomics(id) : Observable<any>{
return this.httpService.delete(this.Url.URLS.getcomics + '/' +  id).map((res : Response) => res.json());
}


postusers(form) : Observable<any>{
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this.httpService.post(this.Url.URLS.getusers, form, headers).map((res:Response) => res.json());
}


postcomics(form) : Observable<any>{
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this.httpService.post(this.Url.URLS.getcomics, form, headers).map((res:Response) => res.json());
}


postseries(form) : Observable<any>{
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this.httpService.post(this.Url.URLS.getseries, form, headers).map((res:Response) => res.json());
}


postseason(form) : Observable<any>{
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this.httpService.post(this.Url.URLS.getseason, form, headers).map((res:Response) => res.json());
}


updateseason(form) : Observable<any>{
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this.httpService.put(this.Url.URLS.getseason, form, headers).map((res:Response) => res.json());
}

updateuser(form) : Observable<any>{
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this.httpService.put(this.Url.URLS.getusers, form, headers).map((res:Response) => res.json());
}

updateseries(form) : Observable<any>{
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this.httpService.put(this.Url.URLS.getseries, form, headers).map((res:Response) => res.json());
}

updatecomics(form) : Observable<any>{
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this.httpService.put(this.Url.URLS.getcomics, form, headers).map((res:Response) => res.json());
}

}
