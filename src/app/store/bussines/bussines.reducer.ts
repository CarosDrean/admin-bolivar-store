import { Reducers } from '../helper/reducer';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { BussinesAction } from './bussines.action';
import { Bussines } from '../../interfaces/bussines';

export class BussinesReducer extends Reducers {

  private static acciones = new BussinesAction();

  constructor() {
    super(BussinesReducer.acciones, adapter);
  }

}

export function reducer(state: State | undefined, action: Action) {
  const reduce = new BussinesReducer();
  return reduce.dreducer(state, action);
}

export const BUSSINES_FEATURE_KEY = 'bussines';

export const adapter: EntityAdapter<Bussines> = createEntityAdapter<Bussines>({
  selectId: item => item._id
});

export interface State extends EntityState<Bussines> {
  loaded: boolean;
  error?: Error | any;
}

