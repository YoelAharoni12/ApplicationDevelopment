import {Component, OnInit} from '@angular/core';
import {combineLatest, map, Observable} from 'rxjs';
import {CakeService} from "../../core/services/cake.service";
import {Cake} from "../../shared/models/cake";
import {CartService} from "../../core/services/cart.service";

@Component({
  selector: 'app-cakes-catalog',
  templateUrl: './cakes-catalog.component.html',
  styleUrls: ['./cakes-catalog.component.css']
})
export class CakesCatalogComponent implements OnInit {

  constructor(private cakeService: CakeService, private cartService: CartService) {
  }

  quantity: Observable<number> | undefined
  cakes$!: Observable<Cake[]>;
  yoel: Cake[] | undefined
  temp$!: Observable<any>;

  ngOnInit(): void {
    this.quantity = this.cartService.productsQuantity$()
    this.cakeService.getProducts$().subscribe(data => this.yoel = data)
    this.cakes$ = this.cakeService.getProducts$()


  }

  addCake(cake: Cake) {
    this.cartService.addProduct(cake)
    this.cartService.getCart$().subscribe(console.log)
  }

  removeCake(cakeName: string) {
    this.cartService.removeProduct(cakeName)
  }

  isincart(cakeName: string) {
    return !!this.cartService.cart$.getValue()[cakeName]
  }


}
