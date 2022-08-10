import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const routes: Routes = [
  {
    path:'' ,component:HomeComponent
  },
  {
    path:'signup',component:RegisterComponent
  },
  {
    path:'signin',component:LoginComponent
  },
  {
    path:'add-product' , component:AddProductComponent
  },
  {
    path:'view-product' ,component:ViewProductComponent
  },
  {
    path:'edit-product' ,component:EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
