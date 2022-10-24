import {Component, OnInit} from '@angular/core';
import {CakeService} from "../../../core/services/cake.service";
import {CartService} from "../../../core/services/cart.service";
import {map, Observable} from "rxjs";
import {Cake} from "../../../shared/models/cake";

@Component({
  selector: 'app-stripe-cakes',
  templateUrl: './stripe-cakes.component.html',
  styleUrls: ['./stripe-cakes.component.css']
})
export class StripeCakesComponent implements OnInit {

  constructor(private cakeService: CakeService, private cartService: CartService) {
  }

  quantity: Observable<number>
  stripeCakes: Observable<Cake[]>;

  ngOnInit(): void {
    this.quantity = this.cartService.productsQuantity$()
    this.stripeCakes = this.cakeService.getProducts$().pipe(map((cakes) => cakes.filter(cake => cake.category === 'stripeCakes')))
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
