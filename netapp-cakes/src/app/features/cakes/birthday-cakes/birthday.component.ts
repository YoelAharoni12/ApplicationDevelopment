import {Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {CakeService} from "../../../core/services/cake.service";
import {Cake} from "../../../shared/models/cake";
import {CartService} from "../../../core/services/cart.service";

@Component({
  selector: 'app-birthday-cakes',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  constructor(private cakeService: CakeService, private cartService: CartService) {
  }

  quantity: Observable<number>
  cakes$: Observable<Cake[]>;

  ngOnInit(): void {
    this.quantity = this.cartService.productsQuantity$()
    this.cakes$ = this.cakeService.getProducts$().pipe(map((cakes) => cakes.filter(cake => cake.category === 'birthdayCakes')))
    this.cakeService.getProducts$().pipe(map((cakes) => cakes.filter(cake => cake.category === 'birthdayCakes'))).subscribe(console.log)
  }

  addCake(cake: Cake) {
    this.cartService.addProduct(cake)
  }

  removeCake(cakeId: string) {
    this.cartService.removeProduct(cakeId)
  }

  isincart(cakeId: string) {
    console.log(this.cartService.cart$.getValue())
    return !!this.cartService.cart$.getValue()[cakeId]
  }
}
