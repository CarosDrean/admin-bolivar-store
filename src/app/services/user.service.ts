import { Injectable } from '@angular/core';
import { Service } from '../api/service.helper';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataFunctions } from '../api/data-functions';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Service {

  constructor(private https: HttpClient) {
    super(https, environment.api, DataFunctions.Users);
  }

}
