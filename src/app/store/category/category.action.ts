import { Acciones } from '../helper/action';
import { EntityTypes } from '../helper/interface';

export class CategoryAction extends Acciones{

  static actions: EntityTypes = {
    itemsE: '[Category] Load Categorys',
    itemsSuccessE: '[Category] Load Categorys Success',
    itemsFailE: '[Category] Load Categorys Fail',
    itemE: '[Category] Load Category',
    itemSuccessE: '[Category] Load Category Success',
    itemFailE: '[Category] Load Category Fail',
    create: '[Category] Create Category',
    createSuccess: '[Category] Create Category success',
    createFail: '[Category] Create Category fail',
    update: '[Category] Update Category',
    updateSuccess: '[Category] Update Category success',
    updateFail: '[Category] Update Category fail',
    deleteA: '[Category] Delete Category',
    deleteSuccess: '[Category] Delete Category success',
    deleteFail: '[Category] Delete Category fail'
  };

  constructor() {
    super(CategoryAction.actions);
  }

}
