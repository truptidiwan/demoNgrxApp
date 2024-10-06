export interface IProduct {
  image: string;
  title: string;
  description: string;
  price: number;
  id: number;
  quantity: number;
  category: string;
  rating: IRating;
  totalItem: number;
}
export interface IRating {
  rate: number;
  count: number;
}
