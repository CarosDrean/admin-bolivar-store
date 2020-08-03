import { Reducers } from '../helper/reducer';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { OrderAction } from './order.action';
import { Order } from '../../interfaces/order';

export class OrderReducer extends Reducers {

  private static acciones = new OrderAction();

  constructor() {
    super(OrderReducer.acciones, adapter);
  }

}

export function reducer(state: State | undefined, action: Action) {
  const reduce = new OrderReducer();
  return reduce.dreducer(state, action);
}

export const ORDER_FEATURE_KEY = 'order';

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>({
  selectId: item => item._id
});

export interface State extends EntityState<Order> {
  loaded: boolean;
  error?: Error | any;
}

