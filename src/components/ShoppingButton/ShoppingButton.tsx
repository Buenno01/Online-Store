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
      <nav>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          <span data-testid="shopping-cart-size">
            (
            {cartSize}
            )
          </span>
          <FaShoppingCart />
        </Link>
      </nav>
    </div>
  );
}
export default (ShopButton);
