import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CloverApiService {
    accessToken = "58b1214a-4e87-560f-830e-0cae63d93e4e";
    merchantId = "CKTZT7NW0VA5M";
      getUrl = `https://apisandbox.dev.clover.com/v3/merchants/${this.merchantId}/items?access_token=${this.accessToken}`;

  constructor(private http: Http) {

  }

  getItems(): Observable<any> {
    return this.http.get(this.getUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  editItem(item) {
    let editUrl = `https://apisandbox.dev.clover.com:443/v3/merchants/CKTZT7NW0VA5M/items/${item.id}?access_token=${this.accessToken}`
    console.log("EDIT ITEM", item.id)
    return this.http.post(editUrl, item)
      .map(this.extractData)
      .catch(this.handleError);

  }

  createItem(item) {
    return this.http.post(this.getUrl, item)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteItem(item) {
    let deleteUrl = `https://apisandbox.dev.clover.com:443/v3/merchants/CKTZT7NW0VA5M/items/${item.id}?access_token=${this.accessToken}`

    return this.http.delete(deleteUrl)
      .map(this.extractData)
      .catch(this.handleError);

  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
