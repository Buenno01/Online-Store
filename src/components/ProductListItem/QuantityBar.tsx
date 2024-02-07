import { FaPlus, FaMinus, FaRegTrashCan } from 'react-icons/fa6';
import { Dispatch, SetStateAction } from 'react';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';
import Button from '../Atoms/Button';

type QuantityBarProps = {
  product: ShoppingCartProduct,
  cartProducts: ShoppingCartProduct[],
  setCartProducts: Dispatch<SetStateAction<ShoppingCartProduct[]>>,
};

function QuantityBar({ cartProducts, product,
  setCartProducts }: QuantityBarProps) {
  const handleIncrement = (isDecreasing = false) => {
    if (product.quantityOnShoppingCart < 2 && isDecreasing) {
      return;
    }
    const operator = isDecreasing ? -1 : 1;
    const array = cartProducts.map((item) => ({
      ...item,
      quantityOnShoppingCart: item.id === product.id
        ? item.quantityOnShoppingCart + operator
        : item.quantityOnShoppingCart,
    }));

    setCartProducts([...array]);
  };

  const handleRemove = () => {
    const newList = cartProducts.filter((item) => item.id !== product.id);
    setCartProducts([...newList]);
  };

  return (
    <span className="flex">
      <Button
        onClick={ () => { handleIncrement(true); } }
        Icon={ FaMinus }
      />
      <span
        data-testid="shopping-cart-product-quantity"
        className="w-10 h-8 text-center items-center flex justify-center"
      >
        {product.quantityOnShoppingCart}
      </span>
      <Button
        onClick={ () => { handleIncrement(); } }
        Icon={ FaPlus }
      />
      <Button
        onClick={ handleRemove }
        Icon={ FaRegTrashCan }
      />
    </span>
  );
}

export default QuantityBar;
