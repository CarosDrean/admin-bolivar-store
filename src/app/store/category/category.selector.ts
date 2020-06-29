import { Selector } from '../helper/selector';
import { CATEGORY_FEATURE_KEY, adapter } from './category.reducer';

export class CategorySelector extends Selector {

  constructor() {
    super(CATEGORY_FEATURE_KEY, adapter);
  }

}

