import { Component, OnInit } from '@angular/core';
import {CartService} from "../../core/services/cart.service";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.checkout()
  }

}
