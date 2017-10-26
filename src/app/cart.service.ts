import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CartService {
  productsAdded: any[] = [];
  products: any[] = [];
  cartTotal = 0;

  private productAddedSource = new Subject<any>();


  productAdded$ = this.productAddedSource.asObservable();

  constructor() {
  }

  addtoCart(product) {
    this.productsAdded.push(...product);
  }

  getProduct() {
    return this.products.slice();
  }

  getCartTotal() {
    return this.cartTotal;
  }

  addProductToCart(product) {
    console.log(product);
    let exists = false;
    const parsedPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
    this.cartTotal += parsedPrice;
    //Search this product on the cart and increment the quantity
    this.products = this.products.map(_product => {
      if (_product.product.id === product.id) {
        _product.quantity++;
        exists = true;
      }
      return _product;
    });
    //Add a new product to the cart if it's a new product
    if (!exists) {
      product.parsedPrice = parsedPrice;
      this.products.push({
        product: product,
        quantity: 1
      });
    }

    this.productAddedSource.next({products: this.products, cartTotal: this.cartTotal});
  }

  deleteProductFromCart(product) {
    this.products = this.products.filter(_product => {
      if (_product.product.id === product.id) {
        this.cartTotal -= _product.product.parsedPrice * _product.quantity;
        return false;
      }
      return true;
    });
    this.productAddedSource.next({products: this.products, cartTotal: this.cartTotal});
  }


  flushCart() {
    this.products = [];
    this.cartTotal = 0;
    this.productAddedSource.next({products: this.products, cartTotal: this.cartTotal});
  }
}
