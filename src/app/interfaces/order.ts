export interface Order {
  _id?: string;
  state: string;
  priceTotal: number;
  date: string;
  tel: string;
  products: [string];
}
