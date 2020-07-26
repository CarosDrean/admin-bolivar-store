import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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
