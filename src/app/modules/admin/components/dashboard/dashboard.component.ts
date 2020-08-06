import { Component, OnInit } from '@angular/core';
import { Componente } from '../../../../api/component';
import { BussinesAction } from '../../../../store/bussines/bussines.action';
import { BussinesSelector } from '../../../../store/bussines/bussines.selector';
import { Bussines } from 'src/app/interfaces/bussines';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends Componente implements OnInit {

  private static action = new BussinesAction();
  private selector = new BussinesSelector();
  item: Bussines;
  items: Observable<Bussines[]>;

  constructor(private stor: Store<any>, private notif: NotifierService) {
    super(DashboardComponent.action, stor);
    // this.resetItem();
    this.items = this.stor.pipe(select(this.selector.selectAllEntities));
    this.items.subscribe(data => {
      console.log(data.length);
      if (data.length > 0) {
        this.editb = true;
        this.item = data[0];
      }
    });
  }

  ngOnInit(): void {
    this.getItems();
  }

  // error en el texarea

  /*addItem(item: any) {
    if (this.editb) {
      this.stor.dispatch(DashboardComponent.action.update({ update: item }));
    } else {
      this.stor.dispatch(DashboardComponent.action.create({ new: item }));
    }
    this.notif.notify('success', 'Datos Guardados Exitosamente.');
  }*/

  edit(item: any) {
    this.case = 'Editar';
    this.editb = true;
    this.item = Object.assign({}, item);
  }

  resetItem() {
    this.item = {
      mision: '',
      address: '',
      tel: 0,
      email: ''
    };
  }

}
