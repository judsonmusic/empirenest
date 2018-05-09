import { PictureViewerComponent } from './../../components/picture-viewer/picture-viewer';
import { UtilsProvider } from './../../providers/utils/utils';
import { ProductsProvider } from './../../providers/products/products';
import { ImagesProvider } from './../../providers/images/images';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({ name: "products", segment: "products" })
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  public items100;
  public items250;
  public items500;
  public products;
  public weights;
  public prices;
  public quantities;
  public results;

  constructor(public navCtrl: NavController, public navParams: NavParams, public images: ImagesProvider, public pp: ProductsProvider, public utils: UtilsProvider) {
  }

  ionViewDidLoad() {
    this.products = this.pp.get();
    this.weights = this.utils.weight;
    this.prices = this.utils.prices;
    this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    console.log(this.products);
    /* this.images.get('100').subscribe((res)=>{

      this.items100 = res;

    });

    this.images.get('250').subscribe((res)=>{

      this.items250 = res;

    });

    this.images.get('500').subscribe((res)=>{

      this.items500 = res;

    }); */

    const grouped = this.products.reduce((groups, item) => {
      const grade = item.grade;

      groups[grade] = groups[grade] || [];
      groups[grade].push(item);

      return groups;
    }, {});

    this.results = Object.keys(grouped).map(grade => ({ grade, products: grouped[grade] }));
    console.log(this.results)
  }

  calcPrice(item, qty) {
    console.log(qty, item.selectedWeight.price);
    item.subTotal = qty * item.selectedWeight.price;
    console.log(item.subTotal);
  }

  showPicture(item){

    this.utils.openModal(PictureViewerComponent, {item: item})
  }

}
