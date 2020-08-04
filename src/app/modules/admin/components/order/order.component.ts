import { Component, OnInit } from '@angular/core';
import { Componente } from '../../../../api/component';
import { OrderAction } from '../../../../store/order/order.action';
import { OrderSelector } from '../../../../store/order/order.selector';
import { Order } from '../../../../interfaces/order';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import { ProductOrder, ProductOrderS } from '../../../../interfaces/product';
import { ProductAction } from 'src/app/store/product/product.action';
import { ProductSelector } from '../../../../store/product/product.selector';
import { OrderService } from '../../../../services/order.service';
import { ProductService } from '../../../../services/product.service';
import { DataFunctions } from '../../../../api/data-functions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent extends Componente implements OnInit {

  private static action = new OrderAction();
  private actionProduct = new ProductAction();
  private selectorProduct = new ProductSelector();
  private selector = new OrderSelector();
  item: Order;
  items: Observable<Order[]>;
  products: ProductOrderS[] = [];
  prods: Observable<any[]>;
  subscription: Subscription;
  priceDolar = 3.5;

  constructor(private stor: Store<any>, private cs: OrderService, private ps: ProductService) {
    super(OrderComponent.action, stor);
    this.items = this.stor.pipe(select(this.selector.selectAllEntities));
    /*this.prods = stor.pipe(select(this.selectorProduct.selectAllEntities));
    this.subscription = this.prods.subscribe((res) => {
      console.log(res);
      this.products = res;
    });*/
  }

  ngOnInit(): void {
    this.getItems();
  }

  convert(): void {
    this.cs.convert().subscribe((res: any) => {
      this.priceDolar = res.rates.PEN / res.rates.USD;
      console.log(this.priceDolar);
    });
  }

  getProducts(order: Order) {
    this.products = [];
    const products: ProductOrder[] = order.products;
    console.log(products);
    products.forEach(item => {
      this.subscription = this.ps.getItem(item._id, DataFunctions.ProductFields).subscribe((res: any) => {
        const priceT = +((item.count * res.data.product.price) / this.priceDolar).toFixed(2);
        console.log(res);
        this.products.push({_id: res.data.product._id,
          name: res.data.product.name, price: res.data.product.price, count: item.count, priceTotal: priceT});
        console.log(this.products);
      });
      // this.subscription.unsubscribe();
      // this.stor.dispatch(this.actionProduct.itemE({ id: item._id }));
    });
  }

  edit(item: Order) {
    this.case = 'Editar';
    this.editb = true;
    this.item = Object.assign({}, item);
  }

  sendin(item: Order) {
    const it =  Object.assign({}, item);
    it.state = 'Enviado';
    this.stor.dispatch(OrderComponent.action.update({ update: it }));
  }

  resetItem() {
    this.item = {
      state: '',
      priceTotal: 0,
      date: '',
      tel: '',
      address: '',
      city: '',
      district: ''
    };
  }

}
