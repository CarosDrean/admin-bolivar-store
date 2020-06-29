import { EntityState } from '@ngrx/entity';

export interface EntityTypes {
  itemsE: string;
  itemsSuccessE: string;
  itemsFailE: string;
  itemE: string;
  itemSuccessE: string;
  itemFailE: string;
  create: string;
  createSuccess: string;
  createFail: string;
  update: string;
  updateSuccess: string;
  updateFail: string;
  deleteA: string;
  deleteSuccess: string;
  deleteFail: string;
}

export interface State extends EntityState<any> {
  loaded: boolean;
  error?: Error | any;
}
