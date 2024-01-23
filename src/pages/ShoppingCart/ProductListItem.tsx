import { Dispatch, SetStateAction } from 'react';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';

type ProductListItemProps = {
  product: ShoppingCartProduct
  cartProducts: ShoppingCartProduct[],
  setCartProducts: Dispatch<SetStateAction<ShoppingCartProduct[]>>,
};

function ProductListItem({ product, cartProducts,
  setCartProducts }: ProductListItemProps) {
  const handleDecrease = () => {
    if (product.quantityOnShoppingCart > 1) {
      const array = cartProducts.map((item) => ({
        ...item,
        quantityOnShoppingCart: item.id === product.id
          ? item.quantityOnShoppingCart - 1
          : item.quantityOnShoppingCart,
      }));

      setCartProducts([...array]);
    }
  };

  const handleIncrease = () => {
    const array = cartProducts.map((item) => ({
      ...item,
      quantityOnShoppingCart: item.id === product.id
        ? item.quantityOnShoppingCart + 1
        : item.quantityOnShoppingCart,
    }));

    setCartProducts([...array]);
  };

  const handleRemove = () => {
    const newList = cartProducts.filter((item) => item.id !== product.id);
    setCartProducts([...newList]);
  };

  return (
    <li className="flex items-center gap-2">
      <img src={ product.thumbnail } alt={ product.title } />
      <div className="flex">
        <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
        <span className="flex">
          <button
            data-testid="product-decrease-quantity"
            onClick={ handleDecrease }
          >
            -
          </button>
          <p
            data-testid="shopping-cart-product-quantity"
            className="w-32 text-center"
          >
            {product.quantityOnShoppingCart}
          </p>
          <button
            data-testid="product-increase-quantity"
            onClick={ handleIncrease }
          >
            +
          </button>
          <button
            data-testid="remove-product"
            onClick={ handleRemove }
          >
            Remover
          </button>
        </span>
        <p>{product.price}</p>
      </div>

    </li>
  );
}

export default ProductListItem;
