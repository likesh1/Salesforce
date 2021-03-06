import {Component, Input, OnInit} from '@angular/core';
import {EinsteinservicecallService} from '../Service/einsteinservicecall.service';
import {JsonConstructService} from '../json-construct.service';
import {Product} from '../product.model';
import {JsonResponseModel} from './jsonResponse.model';
import {Router} from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css', './cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  responseData: string;
  x: string;
  product: any;
  elementDisplay: Product;
  getStyle: string;
  getStylebutton: string;

  highProbability: JsonResponseModel;

  constructor(private einstienService: EinsteinservicecallService,
              private jsonConstruct: JsonConstructService,
              private router: Router,
              private cartService: CartService) {
  }

  ngOnInit() {

    this.jsonConstruct.jsonResponse.subscribe(
      (res: string) => {
        this.x = res;
      }
    );

    this.product = this.jsonConstruct.getProductDetails();
    this.responseData = this.jsonConstruct.getReponse();

    for (let i = 0; i < this.product.length; i++) {

      if (this.responseData.toUpperCase() === this.product[i].name.toUpperCase()) {
        this.elementDisplay = this.product[i];
        break;
      }
      else {
        this.elementDisplay = this.product[5];

      }
    }
    if (this.elementDisplay) {
      this.getStyle = 'block';
    }
    if (this.elementDisplay === this.product[5]) {
      this.getStylebutton = 'none';
    }
  }

  addtoCart() {
    //this.cartService.addtoCart(this.elementDisplay);
    this.cartService.addProductToCart(this.elementDisplay);
    setTimeout(() => {
      this.router.navigate(['/cart-list']);
    }, 500);
  }

  goBack() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 500);
  }
}
