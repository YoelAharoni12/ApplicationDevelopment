import {Component, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  quantity: Observable<number>

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.quantity = this.cartService.productsQuantity$()
  }

}
