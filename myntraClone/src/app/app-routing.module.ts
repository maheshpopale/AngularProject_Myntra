import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
import { AddCategoriesComponent } from './_categories/add-categories/add-categories.component';
import { DeleteCategoriesComponent } from './_categories/delete-categories/delete-categories.component';
import { UpdateCategoriesComponent } from './_categories/update-categories/update-categories.component';
import { ViewCategoriesComponent } from './_categories/view-categories/view-categories.component';
import { ProductsListComponent } from './_Products/products-list/products-list.component';


const routes: Routes = [
 {path:'addCategory',component:AddCategoriesComponent},
 {path:'updateCategory/:id',component:UpdateCategoriesComponent},
 {path:'viewCategories',component:ViewCategoriesComponent},
 {path:'deleteCategory/:id',component:DeleteCategoriesComponent},
 {path:'products',component:ProductsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
