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

  const buttonClasses = `
    w-8 h-8 rounded-md
    text-gray-700
    hover:bg-opacity-60
    active:bg-opacity-80
  `;

  return (
    <span className="flex gap-2">
      <Button
        className={ `${buttonClasses}bg-purple-100` }
        onClick={ () => { handleIncrement(true); } }
        Icon={ FaMinus }
      />
      <span
        data-testid="shopping-cart-product-quantity"
        className="w-10 h-8 text-center items-center flex justify-center bg-gray-100
        rounded-md"
      >
        {product.quantityOnShoppingCart}
      </span>
      <Button
        className={ `${buttonClasses}bg-emerald-100` }
        onClick={ () => { handleIncrement(); } }
        Icon={ FaPlus }
      />
      <Button
        className={ `${buttonClasses}bg-red-200` }
        onClick={ handleRemove }
        Icon={ FaRegTrashCan }
      />
    </span>
  );
}

export default QuantityBar;
