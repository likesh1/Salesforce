import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css', './cart-checkout.component.scss']
})
export class CartCheckoutComponent implements OnInit {


  products: any[] = [];
  detailViewActive: boolean;
  showNotFound: boolean;

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.detailViewActive = false;
    this.products = this.cartService.getProduct();
    if (this.products) {
      this.showNotFound = true;
    }
  }

  onProductClick() {
    this.detailViewActive = !this.detailViewActive;
  }

  back() {
    this.router.navigate(['/upload']);
  }


}
