import { Injectable } from '@angular/core';
import { Service } from '../api/service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { DataFunctions } from '../api/data-functions';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends Service {

  constructor(private https: HttpClient) {
    super(https, environment.api, DataFunctions.Category);
  }
}
