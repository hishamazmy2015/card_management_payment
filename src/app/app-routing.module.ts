import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaymentComponent } from './payment/payment.component';

const appRoutes: Routes = [
  {path:"", component:ProductListComponent},
  {path:"cart", component:CartComponent},
  {path:"payment", component:PaymentComponent},
  {path:"**", component:ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
