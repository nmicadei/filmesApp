import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitanicPageRoutingModule } from './titanic-routing.module';

import { TitanicPage } from './titanic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitanicPageRoutingModule
  ],
  declarations: [TitanicPage]
})
export class TitanicPageModule {}
