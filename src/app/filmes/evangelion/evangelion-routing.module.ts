import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvangelionPage } from './evangelion.page';

const routes: Routes = [
  {
    path: '',
    component: EvangelionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvangelionPageRoutingModule {}
