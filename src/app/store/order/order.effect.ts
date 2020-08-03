import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Effects } from '../helper/effect';
import { OrderAction } from './order.action';
import { OrderService } from '../../services/order.service';
import { DataFunctions } from '../../api/data-functions';

@Injectable()
export class OrderEffects extends Effects {

  private static action = new OrderAction();

  constructor(private actios: Actions, private serv: OrderService) {
    super(actios, serv, OrderEffects.action, DataFunctions.OrderFields, 'order');
  }

}
