import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularDraggableModule} from 'angular2-draggable';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {StartupComponent} from './startup/startup.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {UploadComponent} from './upload/upload.component';
import {ImageUploadModule} from 'angular2-image-upload';
import {EinsteinservicecallService} from './Service/einsteinservicecall.service';
import fetchBase from 'fetch-base64';
import {CartListComponent} from './cart-list/cart-list.component';
import {JsonConstructService} from './json-construct.service';
import {NgSpinKitModule} from 'ng-spin-kit';
import {CartCheckoutComponent} from './cart-checkout/cart-checkout.component';
import {CartService} from './cart.service';
import { ParticlesModule } from 'angular-particle';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    StartupComponent,
    HomeComponent,
    HeaderComponent,
    UploadComponent,
    CartListComponent,
    CartCheckoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    ImageUploadModule.forRoot(),
    NgSpinKitModule,
    AngularDraggableModule,
    ParticlesModule
  ],
  providers: [EinsteinservicecallService, JsonConstructService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
