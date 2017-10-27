import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '../not-found/not-found.component';
import {StartupComponent} from '../startup/startup.component';
import {HomeComponent} from '../home/home.component';
import {UploadComponent} from '../upload/upload.component';
import {CartListComponent} from '../cart-list/cart-list.component';
import {CartCheckoutComponent} from '../cart-checkout/cart-checkout.component';
import {BillComponent} from "../bill/bill.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/startup', pathMatch: 'full'},
  {path: 'startup', component: StartupComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'home', component: HomeComponent},
  {path: 'carList', component: CartListComponent},
  {path: 'cart-list', component: CartCheckoutComponent},
  {path: 'bill', component: BillComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
