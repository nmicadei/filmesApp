import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'parasita',
    loadChildren: () => import('./filmes/parasita/parasita.module').then( m => m.ParasitaPageModule)
  },
  {
    path: 'evangelion',
    loadChildren: () => import('./filmes/evangelion/evangelion.module').then( m => m.EvangelionPageModule)
  },
  {
    path: 'de-volta-para-o-futuro',
    loadChildren: () => import('./filmes/de-volta-para-o-futuro/de-volta-para-o-futuro.module').then( m => m.DeVoltaParaOFuturoPageModule)
  },
  {
    path: 'titanic',
    loadChildren: () => import('./filmes/titanic/titanic.module').then( m => m.TitanicPageModule)
  },
  {
    path: 'coraline',
    loadChildren: () => import('./filmes/coraline/coraline.module').then( m => m.CoralinePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
