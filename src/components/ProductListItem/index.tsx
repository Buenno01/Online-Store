import { Dispatch, SetStateAction } from 'react';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';
import ProductInfo from './ProductInfo';
import QuantityBar from './QuantityBar';

type ProductListItemProps = {
  product: ShoppingCartProduct
  cartProducts: ShoppingCartProduct[],
  setCartProducts: Dispatch<SetStateAction<ShoppingCartProduct[]>>,
};

function ProductListItem({ product, cartProducts,
  setCartProducts }: ProductListItemProps) {
  return (
    <li
      className="flex flex-col items-center gap-2
    border border-gray-300 rounded-md px-2 py-1"
    >
      <ProductInfo thumbnail={ product.thumbnail } title={ product.title } />
      <div className="flex justify-between w-full items-center">
        <QuantityBar
          cartProducts={ cartProducts }
          product={ product }
          setCartProducts={ setCartProducts }
        />
        <span className="text-2xl">
          {
          (Number(product.price) * product.quantityOnShoppingCart)
            .toFixed(2).replace('.', ',')
          }
        </span>
      </div>
    </li>
  );
}

export default ProductListItem;
