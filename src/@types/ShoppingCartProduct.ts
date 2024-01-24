import { ProductType } from './ProductType';

export interface ShoppingCartProduct extends ProductType {
  price: any
  quantityOnShoppingCart: number,
}
