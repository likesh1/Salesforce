import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class EinsteinservicecallService {

  token = 'IU6VB4KS2YDQMKI3D5KEJDRXXD6GDWFAPLZWNCGOUXK7BETSCPBFZOBNLADIWQQDZIUS5KDVSCQXPE6LJI67CUDWRORK77AZMBGFDDA';
  modelId = 'GeneralImageClassifier';
  jsonResponse = new EventEmitter<any>();
  responseData = {};

  constructor(private http: Http) {
  }

  setResponse(string: any) {
    this.jsonResponse.emit(string);
    console.log(string);
    this.responseData = string;
  }

  getReponse() {
    return this.responseData;
  }

  getDataJson(base64String: string): Observable<any[]> {
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
