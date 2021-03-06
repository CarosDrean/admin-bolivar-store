import { Injectable } from '@angular/core';
import { Service } from '../api/service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { DataFunctions } from '../api/data-functions';

@Injectable({
  providedIn: 'root'
})
export class BussinesService extends Service {

  constructor(private https: HttpClient) {
    super(https, environment.api, DataFunctions.Bussines);
  }
}
