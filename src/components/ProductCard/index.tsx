import { useLocation, useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { ProductType } from '../../@types/ProductType';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';

type ProductCardProps = {
  product: ProductType,
  shoppingCartItems: ShoppingCartProduct[],
  setShoppingCartItems: Dispatch<SetStateAction<ShoppingCartProduct[]>>,
  quantity?: number,
};

function ProductCard({ product, setShoppingCartItems,
  shoppingCartItems, quantity = 1 }: ProductCardProps) {
  const { thumbnail, title, price } = product;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const addToShoppingCart = (productObject: ProductType) => {
    const itemIndex = shoppingCartItems.findIndex((item) => item.id === product.id);

    if (itemIndex === -1) {
      setShoppingCartItems([
        ...shoppingCartItems,
        { ...productObject, quantityOnShoppingCart: 1 },
      ]);
    } else {
      const copy = shoppingCartItems.map((current, index) => {
        const item = current;
        item.quantityOnShoppingCart = index === itemIndex
          ? (current.quantityOnShoppingCart + 1)
          : current.quantityOnShoppingCart;
        return item;
      });
      setShoppingCartItems([...copy]);
    }
  };

  return (
    <div data-testid="product">
      <img src={ thumbnail } alt={ title } />
      <h3 data-testid="shopping-cart-product-name">{title}</h3>
      <p>{price}</p>
      <button
        data-testid="product-detail-link"
        onClick={ () => {
          navigate(`/product-details/${product.id}`);
        } }
      >
        more details
      </button>
      {
        pathname === '/carrinho' ? (
          <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        )
          : (
            <button
              aria-label="Adicionar produto ao carrinho"
              onClick={ () => { addToShoppingCart(product); } }
              data-testid="product-add-to-cart"
            >
              Adicionar ao carrinho
            </button>
          )
      }
    </div>
  );
}

export default ProductCard;
