import { Selector } from '../helper/selector';
import { PRODUCT_FEATURE_KEY, adapter } from './product.reducer';

export class ProductSelector extends Selector {

  constructor() {
    super(PRODUCT_FEATURE_KEY, adapter);
  }

}

