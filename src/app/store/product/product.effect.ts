import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Effects } from '../helper/effect';
import { DataFunctions } from 'src/app/api/data-functions';
import { ProductService } from 'src/app/services/product.service';
import { ProductAction } from './product.action';

@Injectable()
export class ProductEffects extends Effects {

  private static action: ProductAction = new ProductAction();

  constructor(private actios: Actions, private serv: ProductService) {
    super(actios, serv, ProductEffects.action, DataFunctions.ProductFields, 'product');
  }

}

