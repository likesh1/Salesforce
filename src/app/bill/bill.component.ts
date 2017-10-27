import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  dateObj: number;
  products: any[] = [];
  cartTotal = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.dateObj = Date.now();
    this.products = this.cartService.getProduct();
    this.cartTotal = this.cartService.getCartTotal();
  }

}
