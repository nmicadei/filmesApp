import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoralinePageRoutingModule } from './coraline-routing.module';

import { CoralinePage } from './coraline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoralinePageRoutingModule
  ],
  declarations: [CoralinePage]
})
export class CoralinePageModule {}
