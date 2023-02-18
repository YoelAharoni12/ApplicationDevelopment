import { Component, OnInit } from '@angular/core';
import {CakeService} from "../../../core/services/cake.service";
import {CartService} from "../../../core/services/cart.service";
import {map, Observable} from "rxjs";
import {Cake} from "../../../shared/models/cake";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  constructor(private cakeService: CakeService, private cartService: CartService) {
  }

  quantity: Observable<number>
  fruits: Observable<Cake[]>;

  ngOnInit(): void {
    this.quantity = this.cartService.productsQuantity$()
    this.fruits = this.cakeService.getProducts$().pipe(map((cakes) => cakes.filter(cake => cake.category === 'fruits')))
  }

  addCake(cake: Cake) {
    this.cartService.addProduct(cake)
  }

  removeCake(cakeId: string) {
    this.cartService.removeProduct(cakeId)
  }

  isincart(cakeId: string) {
    return !!this.cartService.cart$.getValue()[cakeId]
  }

}
