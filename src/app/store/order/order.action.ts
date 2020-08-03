import { Acciones } from '../helper/action';
import { EntityTypes } from '../helper/interface';

export class OrderAction extends Acciones{

  static actions: EntityTypes = {
    itemsE: '[Order] Load Orders',
    itemsSuccessE: '[Order] Load Orders Success',
    itemsFailE: '[Order] Load Orders Fail',
    itemE: '[Order] Load Order',
    itemSuccessE: '[Order] Load Order Success',
    itemFailE: '[Order] Load Order Fail',
    create: '[Order] Create Order',
    createSuccess: '[Order] Create Order success',
    createFail: '[Order] Create Order fail',
    update: '[Order] Update Order',
    updateSuccess: '[Order] Update Order success',
    updateFail: '[Order] Update Order fail',
    deleteA: '[Order] Delete Order',
    deleteSuccess: '[Order] Delete Order success',
    deleteFail: '[Order] Delete Order fail'
  };

  constructor() {
    super(OrderAction.actions);
  }

}
