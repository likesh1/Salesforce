import {Component, Input, OnInit} from '@angular/core';
import {EinsteinservicecallService} from '../Service/einsteinservicecall.service';
import {JsonConstructService} from '../json-construct.service';
import {Product} from '../product.model';
import {JsonResponseModel} from "./jsonResponse.model";


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  responseData: any;
  x: any;
  product: any;
  elementDisplay: Product;
  highProbability: JsonResponseModel;

  constructor(private einstienService: EinsteinservicecallService,
              private jsonConstruct: JsonConstructService) {
  }

  ngOnInit() {
    this.jsonConstruct.jsonResponse.subscribe(
      (res: any) => {
        this.x = res;
      }
    );
    this.product = this.jsonConstruct.getProductDetails();
    this.responseData = this.jsonConstruct.getReponse();
    console.log(this.responseData);
    //console.log(this.responseData.probabilities[0].label);
    //console.log(jsonData);
    //this.highProbability = new JsonResponseModel(jsonData.probabilities[0].name, jsonData.probabilities[0].probability);
    // for (let i = 0; i < this.product.length; i++) {
    //   if (this.responseData.probabilities[0].label === this.product[i].name) {
    //     this.elementDisplay = this.product[i];
    //   }
    //   else {
    //     this.elementDisplay.name = 'notFound';
    //   }
    // }
    // console.log(this.elementDisplay);
  }
}
