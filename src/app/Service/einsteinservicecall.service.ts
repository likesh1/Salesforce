import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class EinsteinservicecallService {

  token = 'U4BUOT7WYHKZZIIZN2KZGRPWLOVXQQJ55ZUO4VQDISEVHW7M25OEJVDGSWZAXFA6APRG663YRU5SZI3UJP2AXMZYZNKLCO7DNSS5AQY';

  constructor(private http: Http) {
  }

  getDataJson(base64String: any): Observable<any[]> {
    const headers = new Headers({
      'Content-Type': 'multipart/form-data',
    });
    headers.append('Authorization', `Bearer ${this.token}`);
    headers.append('Cache-Control', 'no-cache');
    console.log(headers.toJSON());
    const options = new RequestOptions({headers: headers});
    const formData: FormData = new FormData();
    console.log(JSON.stringify({base64String}));
    console.log(base64String);
    formData.append('sampleBase64Content', JSON.stringify({base64String}));
    formData.append('modelId', 'FoodImageClassifier');
    console.log(formData);
    return this.http.post('https://api.einstein.ai/v2/vision/predict', formData, options)
      .map(response => {
        response.json();
        console.log(response.json());
      })
      .catch(error => Observable.throw(error.statusText));
  }
}
