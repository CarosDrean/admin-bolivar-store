import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { reducer as ReducerProduct, PRODUCT_FEATURE_KEY } from './product/product.reducer';
import { reducer as ReducerCategory, CATEGORY_FEATURE_KEY } from './category/category.reducer';
import { reducer as ReducerBussines, BUSSINES_FEATURE_KEY } from './bussines/bussines.reducer';
import { searchReducer, SEARCH } from './search/search.reducer';
import { counterReducer as ReducerCount } from './count/counter.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { InjectionToken } from '@angular/core';
import { ProductEffects } from './product/product.effect';
import { CategoryEffects } from './category/category.effect';
import { BussinesEffects } from './bussines/bussines.effect';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

function resetState(reducer) {
  return (state, action) => {
    return reducer(state, action);
  };
}

// esta interface la estamos omitiendo para poder usar reducer que no tiene declarado el estado
// pero si surge algun problema esta siendo usado en loas 3 any de abajo
/*export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [CLASSROM_FEATURE_KEY]: EntityState;
  [TURNO_FEATURE_KEY]: EntityStateT;
  ['count']:
}*/

const reducers: ActionReducerMap<any> = {
  router: fromRouter.routerReducer,
  [PRODUCT_FEATURE_KEY]: ReducerProduct,
  [CATEGORY_FEATURE_KEY]: ReducerCategory,
  [BUSSINES_FEATURE_KEY]: ReducerBussines,
  [SEARCH]: searchReducer,
  ['count']: ReducerCount
};

const metaReducers: MetaReducer<any>[] = !environment.production
 ? [resetState]
 : [resetState];

export const getMetaReducers = (): MetaReducer<any>[] => metaReducers;

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<any>>(
  'Registered Reducers',
  {
    factory: () => reducers
  }
);

export const appEffects = [
  ProductEffects,
  CategoryEffects,
  BussinesEffects
];

