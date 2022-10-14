import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CakesCatalogComponent} from "./features/cakes-catalog/cakes-catalog.component";
import {SignInComponent} from "./features/sign-in/sign-in.component";
import {MainSiteComponent} from "./features/main-site/main-site.component";
import {ShoppingCartComponent} from "./features/shopping-cart/shopping-cart.component";

const routes: Routes = [
  {path: '', redirectTo: 'sign-in', pathMatch:'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'cakes-catalog', component: CakesCatalogComponent},
  {path:'main-site',component:MainSiteComponent},
  {path:'shoppingCart',component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
