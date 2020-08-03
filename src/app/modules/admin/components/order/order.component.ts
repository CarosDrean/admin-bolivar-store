import { Component, OnInit } from '@angular/core';
import { Componente } from '../../../../api/component';
import { OrderAction } from '../../../../store/order/order.action';
import { OrderSelector } from '../../../../store/order/order.selector';
import { Order } from '../../../../interfaces/order';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent extends Componente implements OnInit {

  private static action = new OrderAction();
  private selector = new OrderSelector();
  item: Order;
  items: Observable<Order[]>;

  constructor(private stor: Store<any>) {
    super(OrderComponent.action, stor);
    this.items = this.stor.pipe(select(this.selector.selectAllEntities));
  }

  ngOnInit(): void {
    this.getItems();
  }

  edit(item: Order) {
    this.case = 'Editar';
    this.editb = true;
    this.item = Object.assign({}, item);
  }

  resetItem() {
    this.item = {
      state: '',
      priceTotal: 0,
      date: '',
      tel: '',
      products: ['']
    };
  }

}
