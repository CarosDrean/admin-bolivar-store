import { Injectable } from '@angular/core';
import { Service } from '../api/service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { DataFunctions } from '../api/data-functions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends Service {

  constructor(private https: HttpClient) {
    super(https, environment.api, DataFunctions.Order);
  }

  convert(): Observable<any> {
    const uri = `http://data.fixer.io/api/latest?access_key=382e8544f2b3180751ff32c310c8d3a0&symbols=PEN,USD`;
    return this.https.get(uri);
  }
}
