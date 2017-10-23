import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '../not-found/not-found.component';
import {StartupComponent} from '../startup/startup.component';
import {HomeComponent} from '../home/home.component';
import {UploadComponent} from '../upload/upload.component';
import {CartListComponent} from '../cart-list/cart-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/startup', pathMatch: 'full'},
  {path: 'startup', component: StartupComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'home', component: HomeComponent},
  {path: 'carList', component: CartListComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
