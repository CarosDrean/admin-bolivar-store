import { Reducers } from '../helper/reducer';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { CategoryAction } from './category.action';
import { Category } from 'src/app/interfaces/category';

export class CategoryReducer extends Reducers {

  private static acciones = new CategoryAction();

  constructor() {
    super(CategoryReducer.acciones, adapter);
  }

}

export function reducer(state: State | undefined, action: Action) {
  const reduce = new CategoryReducer();
  return reduce.dreducer(state, action);
}

export const CATEGORY_FEATURE_KEY = 'category';

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  selectId: item => item._id
});

export interface State extends EntityState<Category> {
  loaded: boolean;
  error?: Error | any;
}

