import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CakeService} from "./services/cake.service";
import { HttpClientModule } from '@angular/common/http';
import {CartService} from "./services/cart.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ],
  providers:[CakeService,CartService]
})
export class CoreModule { }
