import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home-switch', loadChildren: './home-switch/home-switch.module#HomeSwitchPageModule' },
  { path: 'home-app', loadChildren: './home-app/home.module#HomePageModule' },
  { path: 'new-empresa', loadChildren: './new-empresa/new-empresa.module#NewEmpresaPageModule' },
  { path: 'peluquerias-list', loadChildren: './peluquerias-list/peluquerias-list.module#PeluqueriasListPageModule' },
  // { path: 'new-empresa-modal', loadChildren: './new-empresa-modal/new-empresa-modal.module#NewEmpresaModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
