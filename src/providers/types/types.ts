import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TypesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TypesProvider {

  public products;

  constructor(public http: Http) {
    console.log('Hello TypesProvider Provider');
  }

  getProducts() {

    return [
      //100//
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Spoon White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Spoon Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Spoon Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Spoon Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super 5A white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super 5A Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super 5A Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super 5A Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "4A white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "4A Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "4A Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "4A Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "3A white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "3A yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "3A Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "3A Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Triangle Shape White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Triangle Shape Yellow" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Triangle Shape Gold" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Triangle Shape Red" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Big Broken White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Big Broken Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Big Broken Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Big Broken Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Small Broken White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Small Broken Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Small Broken Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Small Broken Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Small Footers White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Small Footers Yellow Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Loose Crumbs Broken White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Loose Crumbs Broken Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Loose Crumbs Broken Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Loose Crumbs Broken Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Big Broken Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Big Broken Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Big Broken Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Big Broken Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Small Broken Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Small Broken Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Small Broken Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Small Broken Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Loose Broken Crumbs Cave Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Dry Pick white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Dry Pick Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "100 Grams", "image": "imagepath", "description": "Super Premium Dry Pick Gold Nest" },

      //250//
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Spoon White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Spoon Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Spoon Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Spoon Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super 5A white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super 5A Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super 5A Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super 5A Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "4A white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "4A Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "4A Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "4A Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "3A white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "3A yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "3A Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "3A Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Triangle Shape White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Triangle Shape Yellow" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Triangle Shape Gold" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Triangle Shape Red" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Big Broken White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Big Broken Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Big Broken Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Big Broken Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Small Broken White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Small Broken Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Small Broken Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Small Broken Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Small Footers White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Small Footers Yellow Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Loose Crumbs Broken White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Loose Crumbs Broken Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Loose Crumbs Broken Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Loose Crumbs Broken Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Big Broken Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Big Broken Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Big Broken Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Big Broken Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Small Broken Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Small Broken Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Small Broken Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Small Broken Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Loose Broken Crumbs Cave Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Dry Pick white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Dry Pick Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "250 Grams", "image": "imagepath", "description": "Super Premium Dry Pick Gold Nest" },

      //500//
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Spoon White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Spoon Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Spoon Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Spoon Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super 5A white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super 5A Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super 5A Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super 5A Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "4A white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "4A Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "4A Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "4A Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "3A white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "3A yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "3A Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "3A Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Triangle Shape White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Triangle Shape Yellow" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Triangle Shape Gold" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Triangle Shape Red" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Big Broken White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Big Broken Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Big Broken Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Big Broken Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Small Broken White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Small Broken Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Small Broken Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Small Broken Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Small Footers White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Small Footers Yellow Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Loose Crumbs Broken White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Loose Crumbs Broken Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Loose Crumbs Broken Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Loose Crumbs Broken Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Big Broken Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Big Broken Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Big Broken Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Big Broken Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Small Broken Cave White Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Small Broken Cave Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Small Broken Cave Gold Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Small Broken Cave Red Nest" },

      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Loose Broken Crumbs Cave Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Dry Pick white Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Dry Pick Yellow Nest" },
      { "itemNumber": 123456, "price": 0.00, "category": "500 Grams", "image": "imagepath", "description": "Super Premium Dry Pick Gold Nest" }

    ]
  }





}