import { ProductOrder } from './product';
import { Shipping } from './shipping';

export interface Order {
  _id?: string;
  idUser: string;
  state: string;
  priceTotal: number;
  date: string;
  city: string;
  district: string;
  address: string;
  tel: string;
  shipping?: Shipping;
  products?: ProductOrder[];
}
