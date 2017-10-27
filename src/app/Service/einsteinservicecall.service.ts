import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {JsonResponseModel} from '../cart-list/jsonResponse.model';
import {ProbabilitiesModel} from '../probabilities.model';


@Injectable()
export class EinsteinservicecallService {

  token = '5KAGJNUR6DS3HOI3D5NH6NPOTYN5IT5EC4BXP2EALXAE5YCMXOKHZ3K7HNQSYA6GGGXZ5KTD646YITBQD7XYFNGEOE4TYQWC4OGFABQ';
  modelId = 'FoodImageClassifier';
  jsonResponse = new EventEmitter<any>();
  responseData = {};

  constructor(private http: Http) {
  }

  setResponse(string: any) {
    this.jsonResponse.emit(string);
    this.responseData = string;
  }

  getReponse() {
    return this.responseData;
  }

  getDataJson(base64String: string): Observable<ProbabilitiesModel> {
    const headers = new Headers({
      'Authorization': `Bearer ${this.token}`,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    const formData = new FormData();
    formData.append('sampleBase64Content', base64String);
    formData.append('modelId', this.modelId);
    const options = new RequestOptions({headers: headers});
    return this.http.post('https://cors-anywhere.herokuapp.com/https://api.einstein.ai/v2/vision/predict', formData, options)
      .map(response => {
        return response.json();
      })
      .catch(error => Observable.throw(error.statusText));
  }
}
