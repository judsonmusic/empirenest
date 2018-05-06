import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PictureViewerComponent } from './picture-viewer';

@NgModule({
  declarations: [
    PictureViewerComponent,
  ],
  imports: [
    IonicPageModule.forChild(PictureViewerComponent),
  ],
  exports: [
    PictureViewerComponent
  ]
})

export class PictureViewerComponentModule {}
