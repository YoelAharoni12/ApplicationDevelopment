import {Component, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {Cake} from "../../shared/models/cake";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: { cake: Cake; amount: number }[] = []
  quantityCartitems: Observable<number> | undefined
  totalPrice$!: Observable<number>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCart$().subscribe(data => this.cartItems = data)
    this.quantityCartitems = this.cartService.productsQuantity$()
    this.totalPrice$ = this.cartService.totalPrice$()
  }

  removeProduct(cakeName: string) {
    this.cartService.removeProduct(cakeName)
  }

  resetCart() {
    this.cartService.resetCart()
  }

  addamount(cartItem: { cake: Cake; amount: number }) {
    this.cartService.updateProductAmount(cartItem.cake.name, ++cartItem.amount)
  }

  decreaseAmount(cartItem: { cake: Cake; amount: number }) {
    if (cartItem.amount === 0) {
      return
    }
    this.cartService.updateProductAmount(cartItem.cake.name, --cartItem.amount)
  }

  applyCoupon() {
    // @ts-ignore
    const coupon = parseInt(document.getElementsByClassName('coupon-text')[0].value);

    this.totalPrice$ = this.totalPrice$.pipe(map((totalPrice) => {
      if (totalPrice === 0) {
        return 0
      }
      return totalPrice - coupon
    }))
    // @ts-ignore
    document.getElementsByClassName('coupon-text')[0].value = ''
  }

}
