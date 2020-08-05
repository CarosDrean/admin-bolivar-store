import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly URL_API: string;

  constructor(private https: HttpClient, private router: Router) {
    this.URL_API = environment.api;
  }

  private queryLogin(email: string, password: string) {
    const query = {
      query: `mutation {
        loginUser(email: "${email}", password: "${password}") {
          success
          user {
            _id
            role
          }
          token
          errors{
            path
            message
          }
        }
      }`,
      variables: ''
    };
    return query;
  }

  signIn(email: string, password: string) {
    return this.https.post(this.URL_API, this.queryLogin(email, password));
  }

  login(user: User, token: string) {
    console.log(user);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('_id', user._id);
    sessionStorage.setItem('rol', user.role);
    if (user.role === 'Admin') {
      this.router.navigate(['/admin']);
    } else if (user.role === 'User') {
      this.router.navigate(['/user']);
    }
  }

  logOut() {
    sessionStorage.removeItem('_id');
    sessionStorage.removeItem('rol');
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return '';
    }
    return token;
  }
}
