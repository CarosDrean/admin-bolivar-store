import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
// import { NotyfService } from 'ng-notyf';
import { Componente } from 'src/app/api/component.helper';
import { DataFunctions } from 'src/app/api/data-functions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends Componente implements OnInit {
  case: string;
  user: User;

  constructor(public us: UserService) {
    super(us, DataFunctions.UserFields, 'Usuario');
    this.case = 'Nuevo';
  }

  ngOnInit(): void {
  }

  edit(user: User) {
    // $('.cajaexterna').show();
    this.case = 'Editar';
    this.idEdit = user._id;
    this.user = user;
  }

  resetItem() {
    this.user = {
      name: '',
      lastName: '',
      password: '',
      role: 'Admin',
      email: '',
    };
  }

}
