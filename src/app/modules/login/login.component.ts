import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private ls: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.ls.signIn(this.email, this.password).subscribe((res: any) => {
      const response = res.data.loginUser;
      if (!response.success) {
        console.log(response.errors[0].message);
        // this.notyfService.error(response.errors[0].message);
      } else {
        console.log('ingresando');
        // this.notyfService.success('Ingresando...');
        this.ls.login(response.user, response.token);
      }
    });
  }

}
