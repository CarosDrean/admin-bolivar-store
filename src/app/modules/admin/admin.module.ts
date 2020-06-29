import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './components/main/main.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    UsersComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SweetAlert2Module,
    AdminRoutingModule
  ],
  providers: []
})
export class AdminModule { }
