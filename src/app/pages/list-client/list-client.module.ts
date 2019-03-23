import { ListClientPage } from './list-client.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListClientResolver } from './list-client.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListClientPage,
    resolve: {
      data: ListClientResolver
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
  declarations: [ListClientPage],
  providers: [
    ListClientResolver
  ]
})
export class ListClientPageModule {}
