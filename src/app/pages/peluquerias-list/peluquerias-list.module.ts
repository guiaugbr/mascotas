import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeluqueriasListPage } from './peluquerias-list.page';
import { PeluqueriasListResolver } from './peluquerias-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: PeluqueriasListPage,
    resolve: {
      data: PeluqueriasListResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeluqueriasListPage],
  providers: [
    PeluqueriasListResolver
  ]
})
export class PeluqueriasListPageModule {}
