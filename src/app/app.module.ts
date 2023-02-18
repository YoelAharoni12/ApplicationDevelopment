import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BirthdayComponent} from './features/cakes/birthday-cakes/birthday.component';
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { MainSiteComponent } from './features/main-site/main-site.component';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import {FormsModule} from "@angular/forms";
import {StripeCakesComponent} from "./features/cakes/stripe-cakes/stripe-cakes.component";
import { FrenchPatiseryComponent } from './features/pastries/french-patisery/french-patisery.component';
import { MuffinPatiseryComponent } from './features/pastries/muffin-patisery/muffin-patisery.component';
import { SpecialCookiesComponent } from './features/cookies/special-cookies/special-cookies.component';
import { ChocolateChipsComponent } from './features/cookies/chocolate-chips/chocolate-chips.component';
import { ChocolateMousseComponent } from './features/desserts/chocolate-mousse/chocolate-mousse.component';
import { FruitsComponent } from './features/desserts/fruits/fruits.component';
import { AddProductComponent } from './features/add-product/add-product.component';
import { RemoveProductComponent } from './features/remove-product/remove-product.component';
import { OrderPageComponent } from './features/order-page/order-page.component';
import { PaymentPageComponent } from './features/payment-page/payment-page.component';
import { OrderConfirmationComponent } from './features/order-confirmation/order-confirmation.component';
import { AboutComponent } from './features/about/about.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { NgxToastNotifyModule, NgxToastNotifyService } from "ngx-toast-notify";


@NgModule({
  declarations: [
    AppComponent,
    BirthdayComponent,
    NavBarComponent,
    SignInComponent,
    MainSiteComponent,
    ShoppingCartComponent,
    StripeCakesComponent,
    FrenchPatiseryComponent,
    MuffinPatiseryComponent,
    SpecialCookiesComponent,
    ChocolateChipsComponent,
    ChocolateMousseComponent,
    FruitsComponent,
    AddProductComponent,
    RemoveProductComponent,
    OrderPageComponent,
    PaymentPageComponent,
    OrderConfirmationComponent,
    AboutComponent,
    ContactUsComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    NgxToastNotifyModule.forRoot({
      toastTimeoutInSeconds:  6,
      animationDelayInMilliSeconds:  500,
      enableClosebutton:  true,
      position:  'top-center',
      backgroundColor:  '',
      textColor:  'black'
    })
  ],
  providers: [AppRoutingModule, NgxToastNotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
