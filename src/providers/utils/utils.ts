import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController, AlertController, ModalController } from 'ionic-angular';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UtilsProvider {
  public weight;
  public prices;
  private loading;


  constructor(public http: Http, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    this.weight = [
      '500 grams',
      '250 grams',
      '100 grams'
    ]

    this.prices = [

      {color: "gold", weight: "100 grams", grade: "a", price: 300.00},
      {color: "gold", weight: "250 grams", grade: "a", price: 725.00},
      {color: "gold", weight: "500 grams", grade: "a", price: 1450.00},

      {color: "gold", weight: "100 grams", grade: "aa", price: 325.00},
      {color: "gold", weight: "250 grams", grade: "aa", price: 750.00},
      {color: "gold", weight: "500 grams", grade: "aa", price: 1500.00},

      {color: "gold", weight: "100 grams", grade: "aaa", price: 350.00},
      {color: "gold", weight: "250 grams", grade: "aaa", price: 800.00},
      {color: "gold", weight: "500 grams", grade: "aaa", price: 1600.00},

      {color: "gold", weight: "100 grams", grade: "aaaa", price: 375.00},
      {color: "gold", weight: "250 grams", grade: "aaaa", price: 900.00},
      {color: "gold", weight: "500 grams", grade: "aaaa", price: 1800.00},

      {color: "gold", weight: "100 grams", grade: "aaaaa", price: 395.00},
      {color: "gold", weight: "250 grams", grade: "aaaaa", price: 950.00},
      {color: "gold", weight: "500 grams", grade: "aaaaa", price: 1900.00},

      {color: "red", weight: "100 grams", grade: "a", price: 300.00},
      {color: "red", weight: "250 grams", grade: "a", price: 725.00},
      {color: "red", weight: "500 grams", grade: "a", price: 1450.00},

      {color: "red", weight: "100 grams", grade: "aa", price: 325.00},
      {color: "red", weight: "250 grams", grade: "aa", price: 750.00},
      {color: "red", weight: "500 grams", grade: "aa", price: 1500.00},

      {color: "red", weight: "100 grams", grade: "aaa", price: 350.00},
      {color: "red", weight: "250 grams", grade: "aaa", price: 800.00},
      {color: "red", weight: "500 grams", grade: "aaa", price: 1600.00},

      {color: "red", weight: "100 grams", grade: "aaaa", price: 375.00},
      {color: "red", weight: "250 grams", grade: "aaaa", price: 900.00},
      {color: "red", weight: "500 grams", grade: "aaaa", price: 1800.00},

      {color: "red", weight: "100 grams", grade: "aaaaa", price: 395.00},
      {color: "red", weight: "250 grams", grade: "aaaaa", price: 950.00},
      {color: "red", weight: "500 grams", grade: "aaaaa", price: 1900.00},

      {color: "orange", weight: "100 grams", grade: "a", price: 300.00},
      {color: "orange", weight: "250 grams", grade: "a", price: 725.00},
      {color: "orange", weight: "500 grams", grade: "a", price: 1450.00},

      {color: "orange", weight: "100 grams", grade: "aa", price: 325.00},
      {color: "orange", weight: "250 grams", grade: "aa", price: 750.00},
      {color: "orange", weight: "500 grams", grade: "aa", price: 1500.00},

      {color: "orange", weight: "100 grams", grade: "aaa", price: 350.00},
      {color: "orange", weight: "250 grams", grade: "aaa", price: 800.00},
      {color: "orange", weight: "500 grams", grade: "aaa", price: 1600.00},

      {color: "orange", weight: "100 grams", grade: "aaaa", price: 375.00},
      {color: "orange", weight: "250 grams", grade: "aaaa", price: 900.00},
      {color: "orange", weight: "500 grams", grade: "aaaa", price: 1800.00},

      {color: "orange", weight: "100 grams", grade: "aaaaa", price: 395.00},
      {color: "orange", weight: "250 grams", grade: "aaaaa", price: 950.00},
      {color: "orange", weight: "500 grams", grade: "aaaaa", price: 1900.00},

      {color: "white", weight: "100 grams", grade: "a", price: 300.00},
      {color: "white", weight: "250 grams", grade: "a", price: 725.00},
      {color: "white", weight: "500 grams", grade: "a", price: 1450.00},

      {color: "white", weight: "100 grams", grade: "aa", price: 325.00},
      {color: "white", weight: "250 grams", grade: "aa", price: 750.00},
      {color: "white", weight: "500 grams", grade: "aa", price: 1500.00},

      {color: "white", weight: "100 grams", grade: "aaa", price: 350.00},
      {color: "white", weight: "250 grams", grade: "aaa", price: 800.00},
      {color: "white", weight: "500 grams", grade: "aaa", price: 1600.00},

      {color: "white", weight: "100 grams", grade: "aaaa", price: 375.00},
      {color: "white", weight: "250 grams", grade: "aaaa", price: 900.00},
      {color: "white", weight: "500 grams", grade: "aaaa", price: 1800.00},

      {color: "premium white", weight: "100 grams", grade: "a", price: 300.00},
      {color: "premium white", weight: "250 grams", grade: "a", price: 725.00},
      {color: "premium white", weight: "500 grams", grade: "a", price: 1450.00},

      {color: "premium white", weight: "100 grams", grade: "aa", price: 325.00},
      {color: "premium white", weight: "250 grams", grade: "aa", price: 750.00},
      {color: "premium white", weight: "500 grams", grade: "aa", price: 1500.00},

      {color: "premium white", weight: "100 grams", grade: "aaa", price: 350.00},
      {color: "premium white", weight: "250 grams", grade: "aaa", price: 800.00},
      {color: "premium white", weight: "500 grams", grade: "aaa", price: 1600.00},

      {color: "premium white", weight: "100 grams", grade: "aaaa", price: 375.00},
      {color: "premium white", weight: "250 grams", grade: "aaaa", price: 900.00},
      {color: "premium white", weight: "500 grams", grade: "aaaa", price: 1800.00},

      {color: "premium white", weight: "100 grams", grade: "aaaaa", price: 395.00},
      {color: "premium white", weight: "250 grams", grade: "aaaaa", price: 950.00},
      {color: "premium white", weight: "500 grams", grade: "aaaaa", price: 1900.00},

      

    ]
  }

  showLoading(message?) {

    if (typeof message == "undefined") {

      message = "Please wait";

    }
    this.hideLoading();

    let x = setTimeout(() => {
      clearTimeout(t);
      this.loading.data.content = "Ok it seems we are having network issues. Please refresh and try again."

    }, 40000);

    let t = setTimeout(() => {

      this.loading.data.content = "Please wait. We are still trying to load your data."

    }, 20000);

    //if (!this.loading) {
      this.loading = this.loadingCtrl.create({
        //dismissOnPageChange: true,
        content: message
      });

      this.loading.onDidDismiss(() => {
        //console.log('Dismissed loading');
        clearTimeout(t);
        clearTimeout(x);
      });

      this.loading.present();

      //console.log(this.loading);
    //}
  }

  hideLoading() {
    if (this.loading) {
      this.loading.dismiss()
        .catch((reason: any) => {
          //console.warn('SpinnerService - loading.dismiss()', reason);
          this.loading.dismissAll();  //had to add this or it would not dismiss**
        });
    }
  }

  titleCase(string) {

    return string.split(' ')
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(' ');
  }


  showAlert(title, message, callback?) {
    let alert = this.alertCtrl.create({
      title: title || 'Alert',
      subTitle: message,
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            if (callback) callback(data);
          }
        }
      ]
    });
    alert.present();
  }

  comingSoon(title?, message?, callback?) {
    let alert = this.alertCtrl.create({
      title: title || 'Alert',
      subTitle: 'This feature is coming soon!',
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            if (callback) callback(data);
          }
        }
      ]
    });
    alert.present();
  }

  showConfirm(title, message, callback, callback2) {
    let alert = this.alertCtrl.create({
      title: title || 'Alert!',
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            if (callback) callback(data);
          }
        },
        {
          text: 'Ok',
          handler: data => {
            if (callback) callback2(data);
          }
        }
      ]
    });
    alert.present();
  }

  showPromptOk(title, message, callback) {
    let prompt = this.alertCtrl.create({
      title: title || 'Alert!',
      message: message,
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            if (callback) callback(data);
          }
        }
      ]
    });
    prompt.present();
  }

  showPromptOkCancel(title, message) {
    let prompt = this.alertCtrl.create({
      title: title || 'Alert!',
      message: message,
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            //console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }




  openModal(component, inData?, callback?) {

    let modal = this.modalCtrl.create(component, inData, callback);
    modal.onDidDismiss(data => {
      if (callback) callback(data);
    });
    modal.present();

  }

  findNextId(objectArray) {
    let last = 0;
    if (objectArray && objectArray.length > 0) {
      for (let ii = 0; ii < objectArray.length; ii++) {
        if (objectArray[ii]._id && parseInt(objectArray[ii]._id) > last) {
          last = parseInt(objectArray[ii]._id);
        }
      }
    }
    return last + 1;
  }

  getUrlParams(url) {
    var params = {};
    (url + '?').split('?')[1].split('&').forEach(function (pair) {
      let newpair = (pair + '=').split('=').map(decodeURIComponent);
      if (newpair[0].length) {
        params[newpair[0]] = newpair[1];
      }
    });
    return params;
  };



  // validateEmail(email) {
  //   let message = null;
  //   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   //console.log('Email validation check: ', re.test(email));
  //   if (!re.test(email)) {
  //     message = "Email Invalid";
  //     return Observable.of(message).map(message => { return message });

  //   } else {

  //     return this.http.post(this.apiUrl() + '/api/validate/email', { email: email })
  //       .map(res => res.json())
  //       .map(res => {
  //         //console.log(res);
  //         if (res) {
  //           message = "Email already registered."
  //         }
  //         return message;

  //       })
  //   }

  // }


  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  getCurrentUser() {
    return { _id: JSON.parse(sessionStorage.getItem('user'))._id, firstName: JSON.parse(sessionStorage.getItem('user')).firstName, lastName: JSON.parse(sessionStorage.getItem('user')).lastName }
  }

}
