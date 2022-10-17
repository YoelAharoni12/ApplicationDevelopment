import { Component, OnInit } from '@angular/core';
import {CakeService} from "../../../core/services/cake.service";
import {CartService} from "../../../core/services/cart.service";
import {map, Observable} from "rxjs";
import {Cake} from "../../../shared/models/cake";

@Component({
  selector: 'app-muffin-patisery',
  templateUrl: './muffin-patisery.component.html',
  styleUrls: ['./muffin-patisery.component.css']
})
export class MuffinPatiseryComponent implements OnInit {

  constructor(private cakeService: CakeService, private cartService: CartService) {
  }

  quantity: Observable<number>
  muffinPatisserie: Observable<Cake[]>;

  ngOnInit(): void {
    this.quantity = this.cartService.productsQuantity$()
    this.muffinPatisserie = this.cakeService.getProducts$().pipe(map((cakes) => cakes.filter(cake => cake.category === 'muffinPastry')))
  }

  addCake(cake: Cake) {
    this.cartService.addProduct(cake)
  }

  removeCake(cakeName: string) {
    this.cartService.removeProduct(cakeName)
  }

  isincart(cakeName: string) {
    return !!this.cartService.cart$.getValue()[cakeName]
  }

}
