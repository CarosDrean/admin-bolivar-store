import { Reducers } from '../helper/reducer';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { ProductAction } from './product.action';
import { Product } from 'src/app/interfaces/product';

export class ProductReducer extends Reducers {

  private static acciones = new ProductAction();

  constructor() {
    super(ProductReducer.acciones, adapter);
  }

}

export function reducer(state: State | undefined, action: Action) {
  const reduce = new ProductReducer();
  return reduce.dreducer(state, action);
}

export const PRODUCT_FEATURE_KEY = 'product';

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: item => item._id
});

export interface State extends EntityState<Product> {
  loaded: boolean;
  error?: Error | any;
}

