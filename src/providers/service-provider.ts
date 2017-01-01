import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import{ Observable } from 'rxjs/Observable';


@Injectable()
export class ServiceProvider {

  api: string = "http://localhost/api/api/";

  constructor(public http: Http) {}

  getData() {
    return this.http.get(this.api + 'apiRecupera.php').map(res=> res.json());
  }

}
