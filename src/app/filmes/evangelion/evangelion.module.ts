import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvangelionPageRoutingModule } from './evangelion-routing.module';

import { EvangelionPage } from './evangelion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvangelionPageRoutingModule
  ],
  declarations: [EvangelionPage]
})
export class EvangelionPageModule {}
