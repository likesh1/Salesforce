import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



@Injectable()
export class EinsteinservicecallService {

  token = 'Z4N7IAPKAKE2PCORKVR4LLWVDWN2XVUKHUCVLKII6TWSBGGRXRDNK7H57DFRX3UQEAMCBULMECYYX3L3JFKYT5DBYAJ7WRMMFSYDUMY';
  modelId = 'FoodImageClassifier';

  constructor(private http: Http) {
  }


  getDataJson(base64String: string): Observable<any[]> {

    console.log(base64String);
    const headers = new Headers({
      'Authorization': `Bearer ${this.token}`,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    const formData = new FormData();
    //formData.append('sampleBase64Content', this.base64);
    formData.append('sampleBase64Content', base64String);
    formData.append('modelId', 'FoodImageClassifier');
    const options = new RequestOptions({headers: headers});
    return this.http.post('https://cors-anywhere.herokuapp.com/https://api.einstein.ai/v2/vision/predict', formData, options)
      .map(response => {
        response.json();
        console.log(response.json());
      })
      .catch(error => Observable.throw(error.statusText));
  }
}
