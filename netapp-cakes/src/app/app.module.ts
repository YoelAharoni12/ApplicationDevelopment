import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CakesCatalogComponent} from './features/cakes-catalog/cakes-catalog.component';
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { MainSiteComponent } from './features/main-site/main-site.component';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CakesCatalogComponent,
    NavBarComponent,
    SignInComponent,
    MainSiteComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
