import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PictureViewerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'picture-viewer',
  templateUrl: 'picture-viewer.html'
})
export class PictureViewerComponent {

  public item;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
      console.log(navParams);
     if(navParams.data.item){
      this.item = navParams.data.item;
    } 
  }

  closeModal() {    
    this.viewCtrl.dismiss();
  }

}
