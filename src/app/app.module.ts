import { PictureViewerComponentModule } from './../components/picture-viewer/picture-viewer.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImagesProvider } from '../providers/images/images';
import { TypesProvider } from '../providers/types/types';
import { ProductsProvider } from '../providers/products/products';
import { UtilsProvider } from '../providers/utils/utils';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    PictureViewerComponentModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagesProvider,
    TypesProvider,
    ProductsProvider,
    UtilsProvider
  ]
})
export class AppModule {}
