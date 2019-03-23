import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'details/:id', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'details-users/:id', loadChildren: './pages/details-users/details.module#DetailsPageModule' },
  { path: 'list/:category', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'list-users/:category', loadChildren: './pages/list-users/list.module#ListPageModule' },
  { path: 'list-all', loadChildren: './pages/list-all/list-all.module#ListAllPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesPageModule' },
  { path: 'home-app', loadChildren: './pages/home-app/home.module#HomePageModule' },
  { path: 'new-empresa', loadChildren: './pages/new-empresa/new-empresa.module#NewEmpresaPageModule' },
  // { path: 'new-empresa-modal', loadChildren: './pages/new-empresa-modal/new-empresa-modal.module#NewEmpresaModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
