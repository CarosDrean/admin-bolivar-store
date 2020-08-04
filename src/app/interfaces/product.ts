export interface Product {
  _id?: string;
  name: string;
  price: number;
  description: string;
  state: string;
  category: string;
  visit: number;
  sale: number;
  imgUrl?: string;
  imgRef?: string;
}

export interface ProductOrder {
  _id?: string;
  count: number;
}

export interface ProductOrderS {
  _id?: string;
  name: string;
  price: number;
  count: number;
  priceTotal: number;
}

