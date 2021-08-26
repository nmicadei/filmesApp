import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoralinePage } from './coraline.page';

const routes: Routes = [
  {
    path: '',
    component: CoralinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoralinePageRoutingModule {}
