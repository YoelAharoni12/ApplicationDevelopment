import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BirthdayComponent} from "./features/cakes/birthday-cakes/birthday.component";
import {SignInComponent} from "./features/sign-in/sign-in.component";
import {MainSiteComponent} from "./features/main-site/main-site.component";
import {ShoppingCartComponent} from "./features/shopping-cart/shopping-cart.component";
import {StripeCakesComponent} from "./features/cakes/stripe-cakes/stripe-cakes.component";
import {FrenchPatiseryComponent} from "./features/pastries/french-patisery/french-patisery.component";
import {MuffinPatiseryComponent} from "./features/pastries/muffin-patisery/muffin-patisery.component";
import {SpecialCookiesComponent} from "./features/cookies/special-cookies/special-cookies.component";
import {ChocolateChipsComponent} from "./features/cookies/chocolate-chips/chocolate-chips.component";
import {ChocolateMousseComponent} from "./features/desserts/chocolate-mousse/chocolate-mousse.component";
import {FruitsComponent} from "./features/desserts/fruits/fruits.component";
import {AddProductComponent} from "./features/add-product/add-product.component";
import {RemoveProductComponent} from "./features/remove-product/remove-product.component";
import {OrderPageComponent} from "./features/order-page/order-page.component";
import {PaymentPageComponent} from "./features/payment-page/payment-page.component";
import {OrderConfirmationComponent} from "./features/order-confirmation/order-confirmation.component";

const routes: Routes = [
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'birthday-cakes', component: BirthdayComponent},
  {path: 'main-site', component: MainSiteComponent},
  {path: 'stripeCake', component: StripeCakesComponent},
  {path: 'frenchPatisserie', component: FrenchPatiseryComponent},
  {path: 'muffinPatisserie', component: MuffinPatiseryComponent},
  {path: 'specialCookies', component: SpecialCookiesComponent},
  {path: 'chocolateChips', component: ChocolateChipsComponent},
  {path: 'chocolateMousse', component: ChocolateMousseComponent},
  {path: 'fruits', component: FruitsComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'removeProduct', component: RemoveProductComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent},
  {path: 'orderPage', component: OrderPageComponent},
  {path: 'payment', component: PaymentPageComponent},
  {path: 'orderConfirmation', component: OrderConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
