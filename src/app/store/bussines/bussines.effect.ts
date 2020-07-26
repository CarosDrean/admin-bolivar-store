import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Effects } from '../helper/effect';
import { DataFunctions } from '../../api/data-functions';
import { BussinesService } from '../../services/bussines.service';
import { BussinesAction } from './bussines.action';

@Injectable()
export class BussinesEffects extends Effects {

  private static action = new BussinesAction();

  constructor(private actios: Actions, private serv: BussinesService) {
    super(actios, serv, BussinesEffects.action, DataFunctions.BussinesFields, 'bussines');
  }

}

