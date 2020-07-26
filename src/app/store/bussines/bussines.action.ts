import { Acciones } from '../helper/action';
import { EntityTypes } from '../helper/interface';

export class BussinesAction extends Acciones{

  static actions: EntityTypes = {
    itemsE: '[Bussines] Load Bussiness',
    itemsSuccessE: '[Bussines] Load Bussiness Success',
    itemsFailE: '[Bussines] Load Bussiness Fail',
    itemE: '[Bussines] Load Bussines',
    itemSuccessE: '[Bussines] Load Bussines Success',
    itemFailE: '[Bussines] Load Bussines Fail',
    create: '[Bussines] Create Bussines',
    createSuccess: '[Bussines] Create Bussines success',
    createFail: '[Bussines] Create Bussines fail',
    update: '[Bussines] Update Bussines',
    updateSuccess: '[Bussines] Update Bussines success',
    updateFail: '[Bussines] Update Bussines fail',
    deleteA: '[Bussines] Delete Bussines',
    deleteSuccess: '[Bussines] Delete Bussines success',
    deleteFail: '[Bussines] Delete Bussines fail'
  };

  constructor() {
    super(BussinesAction.actions);
  }

}
