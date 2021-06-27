import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'editProduct', pathMatch: 'full' },
  {path: 'addProduct', component: CreateProductComponent},
  {path: 'editProduct', component: EditProductComponent},
  {path: 'updateProduct/:id', component: UpdateProductComponent},
  {path: 'viewProduct', component: ViewProductComponent},
  {path: 'details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
