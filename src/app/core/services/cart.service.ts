import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {Cake} from "../../shared/models/cake";


@Injectable()
export class CartService {
  cart$ = new BehaviorSubject<Record<string, { cake: Cake; amount: number }>>({});

  constructor() {
  }

  addProduct(cakeToAdd: Cake) {
    let cart = {...this.cart$.value};
    cart[cakeToAdd._id] = {cake: cakeToAdd, amount: 1};
    this.cart$.next(cart);
  }

  removeProduct(cakeId: string) {
    let cart = {...this.cart$.value};
    delete cart[cakeId];
    this.cart$.next(cart);
  }

  updateProductAmount(cakeId: string, amount: number) {
    let cart = {...this.cart$.value};
    cart[cakeId].amount = amount;
    this.cart$.next(cart);
  }

  checkout() {
    this.cart$.next({});
  }

  totalPrice$(): Observable<number> {
    const a = {a: 5, b: 6}
    return this.cart$.pipe(
      map((cart: Record<string, { cake: Cake, amount: number }>) =>
        Object.values(cart).reduce(
          (acc, current) => (acc += current.amount * current.cake.price),
          0
        )
      )
    );
  }

  productsQuantity$(): Observable<number> {
    return this.cart$.pipe(map((cart) => Object.keys(cart).length));
  }

  getCart$() {
    return this.cart$.pipe(map((cart) => Object.values(cart)));
  }

  resetCart() {
    this.cart$.next({});
  }

}
