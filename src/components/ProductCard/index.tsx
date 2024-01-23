import { useLocation, useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { ProductType } from '../../@types/ProductType';

type ProductCardProps = {
  product: ProductType,
  shoppingCartItems: ProductType[],
  setShoppingCartItems: Dispatch<SetStateAction<ProductType[]>>,
  quantity?: number,
};

function ProductCard({ product, setShoppingCartItems,
  shoppingCartItems, quantity = 1 }: ProductCardProps) {
  const { thumbnail, title, price } = product;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const addToShoppingCart = (productObject: ProductType) => {
    setShoppingCartItems([...shoppingCartItems, productObject]);
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
