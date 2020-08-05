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
import { OrderComponent } from './components/order/order.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    UsersComponent,
    ProductComponent,
    CategoryComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NotifierModule.withConfig(customNotifierOptions),
    SweetAlert2Module,
    AdminRoutingModule
  ],
  providers: []
})
export class AdminModule { }
