import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeSwitchPage } from './home-switch.page';
import { HomeSwitchResolver } from './home-switch.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeSwitchPage,
    resolve: {
      data: HomeSwitchResolver
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
  declarations: [HomeSwitchPage],
  providers: [
    HomeSwitchResolver
  ]
})
export class HomeSwitchPageModule {}
