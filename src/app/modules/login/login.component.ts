import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  private notifier: NotifierService;

  constructor(private ls: LoginService, notifi: NotifierService) {
    this.notifier = notifi;
  }

  ngOnInit(): void {
  }

  login() {
    this.ls.signIn(this.email, this.password).subscribe((res: any) => {
      const response = res.data.loginUser;
      if (!response.success) {
        this.notifier.notify('error', response.errors[0].message );
        console.log(response.errors[0].message);
        // this.notyfService.error(response.errors[0].message);
      } else {
        console.log('ingresando');
        this.notifier.notify('success', 'Ingresando' );
        // this.notyfService.success('Ingresando...');
        this.ls.login(response.user, response.token);
      }
    });
  }

}
