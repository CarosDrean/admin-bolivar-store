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
