import {EventEmitter, Injectable} from '@angular/core';
import {Product} from './product.model';


@Injectable()
export class JsonConstructService {

  private productList: Product[] = [
    new Product(1, 'Apple', '60', true, true, 'https://4.bp.blogspot.com/-e7nLIhnZbSg/T2-OHBiW-tI/AAAAAAAACcQ/VCysZsfNTxE/s320/1281252_apple.jpg', 'An apple is a pomaceous edible fruit of a temperate-zone deciduous tree.'),
    new Product(2, 'Banana', '20', true, true, 'http://nhssy4anwbq1onket1o9s101.wpengine.netdna-cdn.com/wp-content/uploads/banana-5-1-250x300.png', 'Banana is the common name for a type of herb and also the name for the herbaceous plants that grow this herb'),
    new Product(3, 'Milk', '10', true, true, 'http://www.aquatech-skincare.com/images/BodyFirmingMilkJugXL.jpg', 'Milk is a white liquid made by mammals, for example cows, dogs, and humans.'),
    new Product(4, 'Tomato', '35', true, true, 'http://nhssy4anwbq1onket1o9s101.wpengine.netdna-cdn.com/wp-content/uploads/local_tomato-250x300.jpg', 'The tomato is a fruit. It is shiny and smooth. It has many small seeds'),
    new Product(5, 'Chocolate', '12', true, true, 'https://c1.staticflickr.com/1/582/22413560264_f41bf18189.jpg', 'Chocolate is a typically sweet, usually brown food preparation of Theobroma cacao seeds, roasted and ground.'),
    new Product(6, 'Not Found', '0', false, true, 'http://i3.cpcache.com/product/1430233937/404_error_costume_not_found_tshirt.jpg?width=300&height=300&Filters=%5B%7B%22name%22%3A%22crop%22%2C%22value%22%3A%7B%22x%22%3A25.0%2C%22y%22%3A0.0%2C%22w%22%3A250%2C%22h%22%3A300.0%7D%2C%22sequence%22%3A1%7D%2C%7B%22name%22%3A%22background%22%2C%22value%22%3A%22F2F2F2%22%2C%22sequence%22%3A2%7D%5D',
      'Sorry Not Found')
  ];

  jsonResponse = new EventEmitter<string>();
  responseData: string;


  constructor() {
  }


  setResponse(string: string) {

    this.jsonResponse.emit(string);
    this.responseData = string;
  }

  getProductDetails() {
    return this.productList.slice();
  }

  getReponse() {
    return this.responseData;
  }
}


