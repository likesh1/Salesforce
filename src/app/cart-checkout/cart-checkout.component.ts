import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css', './cart-checkout.component.scss']
})
export class CartCheckoutComponent implements OnInit {
  products: any[] = [];
  detailViewActive: boolean;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.detailViewActive = false;
    this.products = this.cartService.getProduct();
    console.log(this.products);
    console.log(this.products[0].product.id);
  }

  onProductClick() {
    this.detailViewActive = !this.detailViewActive;
  }

  // onAddToCart() {
  //   this.cartService.addProductToCart(this.product)
  // }


}
