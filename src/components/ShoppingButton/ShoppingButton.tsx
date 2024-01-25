import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';

type ShopButtonProps = {
  shoppingCartItems:ShoppingCartProduct[],
};
function ShopButton({ shoppingCartItems }: ShopButtonProps) {
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    const totalItems = shoppingCartItems.reduce(
      (acc, product) => acc + product.quantityOnShoppingCart,
      0,
    );
    setCartSize(totalItems);
  }, [shoppingCartItems]);

  return (
    <div>
      <nav className="relative">
        <Link
          to="/carrinho"
          className="hover:text-gray-200 text-white active:text-gray-100"
          data-testid="shopping-cart-button"
        >
          {
            cartSize > 0
          && (
            <span
              className="absolute bg-red-500
              text-xs font-medium rounded-full w-4 h-4 text-center
              flex justify-center bottom-4 left-4"
              data-testid="shopping-cart-size"
            >
              {cartSize}
            </span>
          )
          }
          <span className="text-2xl">
            <FaShoppingCart />
          </span>
        </Link>
      </nav>
    </div>
  );
}
export default ShopButton;
