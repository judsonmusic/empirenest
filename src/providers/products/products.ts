import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductsProvider {

  constructor(public http: Http) {
    console.log('Hello ProductsProvider Provider');
  }

  get() {

    return [
      //"100 grams"//
      { grade: "A", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 325.00 }, { weight: "250 grams", price: 650.00 }, { weight: "500 grams", price: 1200.00 }], "category": "A", "image": "gold/a.jpg", "description": "Gold Grade A"},
      {  grade: "A", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 325.00 }, { weight: "250 grams", price: 650.00 }, { weight: "500 grams", price: 1200.00 }], "category": "A", "image": "orange/a.jpg", "description": "Orange Grade A"},
      {  grade: "A", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 325.00 }, { weight: "250 grams", price: 650.00 }, { weight: "500 grams", price: 1200.00 }], "category": "A", "image": "red/250_aaa.jpg", "description": "Red Grade A"},
      {  grade: "A", "itemNumber": 123456, "prices": [{ weight: "250 grams", price: 700.00 }, { weight: "500 grams", price: 1300.00 }], "category": "A", "image": "premium_white/a.jpg", "description": "Premium White Grade A"},
      {  grade: "A", "itemNumber": 123456, "prices": [{ weight: "250 grams", price: 600.00 }, { weight: "500 grams", price: 1200.00 }], "category": "A", "image": "white/a.jpg", "description": "White Grade A"},




      {  grade: "AA", "itemNumber": 123456, "prices": [{ weight: "250 grams", price: 700.00 }, { weight: "500 grams", price: 1400.00 }], "category": "AA", "image": "gold/aa.jpg", "description": "Gold Grade AA"},
      {  grade: "AA", "itemNumber": 123456, "prices": [{ weight: "250 grams", price: 700.00 }, { weight: "500 grams", price: 1400.00 }], "category": "AA", "image": "orange/aa.jpg", "description": "Orange Grade AA"},
      {  grade: "AA", "itemNumber": 123456, "prices": [{ weight: "250 grams", price: 700.00 }, { weight: "500 grams", price: 1400.00 }], "category": "AA", "image": "red/250_aaa.jpg", "description": "Red Grade AA"},
      {  grade: "AA", "itemNumber": 123456, "prices": [{ weight: "250 grams", price: 650.00 },{ weight: "500 grams", price: 1300.00 }], "category": "AA", "image": "premium_white/aa.jpg", "description": "Premium White Grade AA"},
      {  grade: "AA", "itemNumber": 123456, "prices": [{ weight: "250 grams", price: 725.00 }, { weight: "500 grams", price: 1400.00 }], "category": "AA", "image": "white/aa.jpg", "description": "White Grade AA"},




      {  grade: "AAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 325.00 }, { weight: "250 grams", price: 750.00 }, { weight: "500 grams", price: 1300.00 }], "category": "AAA", "image": "gold/aaa.jpg", "description": "Gold Grade AAA"},
      { grade: "AAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 325.00 }, { weight: "250 grams", price: 750.00 }, { weight: "500 grams", price: 1300.00 }], "category": "AAA", "image": "orange/aaa.jpg", "description": "Orange Grade AAA"},
      { grade: "AAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 325.00 }, { weight: "250 grams", price: 750.00 }, { weight: "500 grams", price: 1300.00 }], "category": "AAA", "image": "red/250_aaa.jpg", "description": "Red Grade AAA"},
      { grade: "AAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 300.00 }, { weight: "250 grams", price: 700.00 }, { weight: "500 grams", price: 1400.00 }], "category": "AAA", "image": "premium_white/aaa.jpg", "description": "Premium White Grade AAA"},
      { grade: "AAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 300.00 }, { weight: "250 grams", price: 750.00 }, { weight: "500 grams", price: 1500.00 }], "category": "AAA", "image": "white/aaa.jpg", "description": "White Grade AAA"},




      { grade: "AAAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 350.00 }, { weight: "250 grams", price: 850.00 }, { weight: "500 grams", price: 1600.00 }], "category": "AAAA", "image": "gold/aaaa.jpg", "description": "Gold Grade AAAA"},
      { grade: "AAAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 350.00 }, { weight: "250 grams", price: 850.00 }, { weight: "500 grams", price: 1600.00 }], "category": "AAAA", "image": "orange/aaaa.jpg", "description": "Orange Grade AAAA"},
      { grade: "AAAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 350.00 }, { weight: "250 grams", price: 850.00 }, { weight: "500 grams", price: 1600.00 }], "category": "AAAA", "image": "red/250_aaaa.jpg", "description": "Red Grade AAAA"},
      { grade: "AAAA", "itemNumber": 123456, "prices": [{ weight: "250 grams", price: 800.00 }, { weight: "500 grams", price: 1500.00 }], "category": "AAAA", "image": "premium_white/aaaa.jpg", "description": "Premium White Grade AAAA"},
      { grade: "AAAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 325.00 }, { weight: "250 grams", price: 800.00 }, { weight: "500 grams", price: 1600.00 }], "category": "AAAA", "image": "white/aaaa.jpg", "description": "White Grade AAAA"},




      { grade: "AAAAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 375.00 }, { weight: "250 grams", price: 900.00 }, { weight: "500 grams", price: 1800.00 }], "category": "AAAAA", "image": "gold/aaaaa.jpg", "description": "Gold Grade AAAAA"},
      { grade: "AAAAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 375.00 }, { weight: "250 grams", price: 800.00 }, { weight: "500 grams", price: 1800.00 }], "category": "AAAAA", "image": "orange/aaaaa.jpg", "description": "Orange Grade AAAAA"},
      { grade: "AAAAA", "itemNumber": 123456, "prices": [{ weight: "100 grams", price: 350.00 }, { weight: "250 grams", price: 850.00 }, { weight: "500 grams", price: 1700.00 }], "category": "AAAAA", "image": "premium_white/aaaaa.jpg", "description": "Premium White Grade AAAAA"},



    ]
  }

}
