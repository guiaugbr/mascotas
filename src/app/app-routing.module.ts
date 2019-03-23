import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'details/:id', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'home-switch', loadChildren: './pages/home-switch/home-switch.module#HomeSwitchPageModule' },
  { path: 'home-app', loadChildren: './pages/home-app/home.module#HomePageModule' },
  { path: 'new-empresa', loadChildren: './pages/new-empresa/new-empresa.module#NewEmpresaPageModule' },
  { path: 'peluquerias-list', loadChildren: './pages/peluquerias-list/peluquerias-list.module#PeluqueriasListPageModule' },
  // { path: 'new-empresa-modal', loadChildren: './pages/new-empresa-modal/new-empresa-modal.module#NewEmpresaModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
