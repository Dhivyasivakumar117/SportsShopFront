import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CricketComponent } from './cricket/cricket.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FootballComponent } from './football/football.component';
import { HockyComponent } from './hocky/hocky.component';
import { LoginComponent } from './login/login.component';
import { MenumoduleComponent } from './menumodule/menumodule.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { VollyballComponent } from './vollyball/vollyball.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'cricket', component: CricketComponent},
  {path: 'vollyball', component: VollyballComponent},
  {path: 'football', component: FootballComponent},
  {path: 'hocky', component: HockyComponent},
  {path: 'module', component: MenumoduleComponent},
  {path: 'addProduct', component: CreateProductComponent},
  {path: 'editProduct', component: EditProductComponent},
  {path: 'updateProduct/:id', component: UpdateProductComponent},
  {path: 'viewProduct', component: ViewProductComponent},
  {path: 'userlist', component: UserlistComponent},
 {path: 'details/:id', component: ProductDetailsComponent},
{path: 'detail/:id', component: UserDetailComponent},
  {path: 'registration', component: RegisterUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cartDetails/:id', component: CartDetailComponent},
  {path: 'updateCart/:id', component: UpdateCartComponent},
  {path: 'cartList', component: CartlistComponent},
  {path: 'createCart', component: CreateCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


