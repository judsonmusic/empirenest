import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/operator/map';
//import { Subject } from "rxjs/Subject";

/*
  Generated class for the ImagesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ImagesProvider {

  constructor(public http: Http) {
    console.log('Hello ImagesProvider Provider');
  }

  get(folder?){
    if(folder){
      folder = '/' + folder;
    }else{
      folder = '';
    }
    return this.http.get('http://localhost:3000/api/images' + folder)
    .map(res=>res.json())
    .map((res)=>{

      return res;

    })
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
