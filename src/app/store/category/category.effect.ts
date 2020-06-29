import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Effects } from '../helper/effect';
import { DataFunctions } from 'src/app/api/data-functions';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryAction } from './category.action';

@Injectable()
export class CategoryEffects extends Effects {

  private static actionCategoryCarrera: CategoryAction = new CategoryAction();

  constructor(private actios: Actions, private serv: CategoryService) {
    super(actios, serv, CategoryEffects.actionCategoryCarrera, DataFunctions.CategoryFields, 'category');
  }

}

