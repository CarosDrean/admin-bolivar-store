import { Acciones } from '../helper/action';
import { EntityTypes } from '../helper/interface';

export class ProductAction extends Acciones{

  static actions: EntityTypes = {
    itemsE: '[Product] Load Products',
    itemsSuccessE: '[Product] Load Products Success',
    itemsFailE: '[Product] Load Products Fail',
    itemE: '[Product] Load Product',
    itemSuccessE: '[Product] Load Product Success',
    itemFailE: '[Product] Load Product Fail',
    create: '[Product] Create Product',
    createSuccess: '[Product] Create Product success',
    createFail: '[Product] Create Product fail',
    update: '[Product] Update Product',
    updateSuccess: '[Product] Update Product success',
    updateFail: '[Product] Update Product fail',
    deleteA: '[Product] Delete Product',
    deleteSuccess: '[Product] Delete Product success',
    deleteFail: '[Product] Delete Product fail'
  };

  constructor() {
    super(ProductAction.actions);
  }

}
