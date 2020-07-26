import { Selector } from '../helper/selector';
import { BUSSINES_FEATURE_KEY, adapter } from './bussines.reducer';

export class BussinesSelector extends Selector {

  constructor() {
    super(BUSSINES_FEATURE_KEY, adapter);
  }

}

