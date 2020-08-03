import { Selector } from '../helper/selector';
import { ORDER_FEATURE_KEY, adapter } from './order.reducer';

export class OrderSelector extends Selector {

  constructor() {
    super(ORDER_FEATURE_KEY, adapter);
  }

}

