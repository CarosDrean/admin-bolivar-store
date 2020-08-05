import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { LoginComponent } from './modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './interceptor/interceptor.service';
import { UserService } from './services/user.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { handleUndo } from 'ngrx-undo';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appEffects, REDUCER_TOKEN } from './store';
import { ReduxComponent } from './modules/redux/redux.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

// import { NotyfModule } from 'ng-notyf';
import { BussinesService } from './services/bussines.service';
import { OrderService } from './services/order.service';

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
    AppComponent,
    LoginComponent,
    ReduxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions),
    SweetAlert2Module.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    // NotyfModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers: [handleUndo]}),
    StoreRouterConnectingModule.forRoot(),
    ...(environment.production
      ? []
      : [
        StoreDevtoolsModule.instrument({
          name: 'Crud application',
          logOnly: environment.production
        })
      ]
      ),
    EffectsModule.forRoot([...appEffects])
  ],
  providers: [
    ProductService,
    CategoryService,
    BussinesService,
    OrderService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
