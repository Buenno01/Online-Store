import { ProductType } from './ProductType';

export interface ShoppingCartProduct extends ProductType {
  quantityOnShoppingCart: number,
}
