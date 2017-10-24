import {EventEmitter, Injectable} from '@angular/core';
import {Product} from './product.model';


@Injectable()
export class JsonConstructService {
  private productList = [
    {
      'id': 1,
      'name': 'Apple',
      'price': '60.000',
      'available': true,
      'best_seller': true,
      'img': 'http://wififresh.com/files/product_img/medium/apple.jpg',
      'description': 'An apple is a pomaceous edible fruit of a temperate-zone deciduous tree.'
    }, {
      'id': 2,
      'name': 'Banana',
      'price': '20.000',
      'available': false,
      'best_seller': false,
      'img': 'https://i.pinimg.com/736x/18/4f/57/184f57813f15e26f7b3606d17ebb459f--banana-bread-recipes-lifehacks.jpg',
      'description': 'Banana is the common name for a type of herb and also the name for the herbaceous plants that grow this herb'
    },
    {
      'id': 3,
      'name': 'Milk',
      'price': '10.000',
      'available': true,
      'best_seller': true,
      'img': 'http://www.whyzz.com/system/uploads/question/image/219/answer_detail_thumb_milk_shutterstock_275753012.jpg',
      'description': 'Milk is a white liquid made by mammals, for example cows, dogs, and humans.'
    },
    {
      'id': 4,
      'name': 'Tomato',
      'price': '35.000',
      'available': false,
      'best_seller': false,
      'img': 'https://res.cloudinary.com/growinginteractive/image/upload/q_80/v1482961259/Plants/TOM2.jpg',
      'description': 'The tomato is a fruit. It is shiny and smooth. It has many small seeds'
    },
    {
      'id': 5,
      'name': 'Chocolate',
      'price': '12.000',
      'available': true,
      'best_seller': true,
      'img': 'https://d12iznj5d50y6e.cloudfront.net/pub/media/catalog/' +
      'product/cache/small_image/300x400/beff4985b56e3afdbeabfc89641a4582/2/6/26096-milk-chocolate-caramels-pavilion-collection.jpg',
      'description': 'Chocolate is a typically sweet, usually brown food preparation of Theobroma cacao seeds, roasted and ground.'
    }
  ];

  jsonResponse = new EventEmitter<any>();
  responseData = [];

  constructor() {
  }

  setResponse(string: any) {
    this.jsonResponse.emit(string);
    console.log(string);
    this.responseData.push(string);
  }

  getProductDetails() {
    return this.productList.slice();
  }

  getReponse() {
    return this.responseData.slice();
  }
}


