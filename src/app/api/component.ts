import { Acciones } from '../store/helper/action';
import { Store } from '@ngrx/store';

export abstract class Componente {
  case: string;
  editb: boolean;
  idDelete: string;
  lastLeter: string;

  constructor(private acciones: Acciones, private store: Store<any>) {
    this.clean();
  }

  getItems() {
    this.store.dispatch(this.acciones.itemsE());
  }

  deleteItem() {
    const id = this.idDelete;
    this.store.dispatch(this.acciones.deleteA({ id }));
  }

  addItem(item: any) {
    if (this.editb) {
      this.store.dispatch(this.acciones.update({ update: item }));
    } else {
      this.store.dispatch(this.acciones.create({ new: item }));
      this.getItems();
    }
    this.clean();
  }

  abstract edit(item: any): void;

  clean() {
    this.case = 'Nuevo';
    this.editb = false;
    this.idDelete = '';
    this.resetItem();
  }

  abstract resetItem(): void;

  getKeyForDelete(id: string) {
    this.idDelete = id;
  }

}
