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
  quantityCartitems: Observable<number>
  totalPrice$: Observable<number>;
  existCopun: boolean = true

  constructor(private cartService: CartService) {
  }

  coupunList = {

    effiCoupon: 100,
    yoelCoupon: 50,
    sharifiCoupon: 20

  }

  ngOnInit(): void {
    this.cartService.getCart$().subscribe(data => this.cartItems = data)
    this.quantityCartitems = this.cartService.productsQuantity$()
    this.totalPrice$ = this.cartService.totalPrice$()
    this.cartService.totalPrice$().subscribe(console.log)
  }

  removeProduct(cakeName: string) {
    this.cartService.removeProduct(cakeName)
  }

  resetCart() {
    this.cartService.resetCart()
  }

  addamount(cartItem: { cake: Cake; amount: number }) {
    this.cartService.updateProductAmount(cartItem.cake._id, ++cartItem.amount)
  }

  decreaseAmount(cartItem: { cake: Cake; amount: number }) {
    if (cartItem.amount === 0) {
      return
    }
    this.cartService.updateProductAmount(cartItem.cake._id, --cartItem.amount)
  }

  existCoupun() {
    // @ts-ignore
    const couponValue: string = document.getElementsByClassName('coupon-text')[0].value;
    return !!Object.keys(this.coupunList).find(x => x === couponValue)
  }

  applyCoupon() {
    // @ts-ignore
    const couponValue: string = document.getElementsByClassName('coupon-text')[0].value;
    const priceOff = Object.keys(this.coupunList).find(x => x === couponValue)
    this.existCopun = !!Object.keys(this.coupunList).find(x => x === couponValue)

    this.totalPrice$ = this.totalPrice$.pipe(map((totalPrice) => {
      if (totalPrice === 0) {
        return 0
      }
      // @ts-ignore
      return this.existCopun ? totalPrice - this.coupunList[priceOff] : totalPrice;
    }))

  }

}
