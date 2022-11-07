export interface Product {
  _id?: string;
  name: string;
  price: number;
  category: string;
  quantity?: number;
  description?: string;
  imagePath?: string;
}
