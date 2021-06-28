import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { MenumoduleComponent } from './menumodule/menumodule.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path : 'module', component: MenumoduleComponent,
  children:[
    {path: 'module', redirectTo: 'viewProduct'},
  {path: 'addProduct', component: CreateProductComponent},
  {path: 'editProduct', component: EditProductComponent},
  {path: 'updateProduct/:id', component: UpdateProductComponent},
  {path: 'viewProduct', component: ViewProductComponent},
  {path: 'userlist', component: UserlistComponent},
 {path: 'details/:id', component: ProductDetailsComponent},
  ]
},
{path: 'model/updateProduct/:id', component: UpdateProductComponent},
{path: 'detail/:id', component: UserDetailComponent},
  {path: 'registration', component: RegisterUserComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


