import { createAction, props } from '@ngrx/store';
import { EntityTypes } from './interface';

export class Acciones {

  constructor(private actions: EntityTypes) {
  }

  public itemsE = createAction(this.actions.itemsE);

  public itemsSuccessE = createAction(
    this.actions.itemsSuccessE,
    props<{ data: any[] }>()
  );

  public itemsFailE = createAction(
    this.actions.itemsFailE,
    props<{ error: Error | any }>()
  );

  public itemE = createAction(
    this.actions.itemE,
    props<{ id: string }>()
  );

  public itemSuccessE = createAction(
    this.actions.itemSuccessE,
    props<{ entity: any }>()
  );

  public itemFailE = createAction(
    this.actions.itemFailE,
    props<{ error: Error | any }>()
  );

  public update = createAction(
    this.actions.update,
    props<{ update: any }>()
  );

  public updateSuccess = createAction(
    this.actions.updateSuccess,
    props<{ entity: any }>()
  );

  public updateFail = createAction(
    this.actions.updateFail,
    props<{ error: Error | any }>()
  );

  public create = createAction(
    this.actions.create,
    props<{ new: any }>()
  );

  public createSuccess = createAction(
    this.actions.createSuccess,
    props<{ entity: any }>()
  );

  public createFail = createAction(
    this.actions.createFail,
    props<{ error: Error | any }>()
  );

  public deleteA = createAction(
    this.actions.deleteA,
    props<{ id: string }>()
  );

  public deleteSuccess = createAction(
    this.actions.deleteSuccess
  );

  public deleteFail = createAction(
    this.actions.deleteFail,
    props<{ error: Error | any }>()
  );
}

