import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';
import { useLocalStorage } from '../../services/useLocalStorage';
import ProductListItem from './ProductListItem';

function ShoppingCart() {
  const [
    products,
    setProducts,
  ] = useLocalStorage<ShoppingCartProduct[]>('shoppingCart', [] as ShoppingCartProduct[]);
  return (
    <div className="shopping-cart-empty-page">
      <h1>Carrinho de Compras</h1>

      {products.length !== 0 ? (
        products.map((item) => (
          <ProductListItem
            key={ item.id }
            product={ item }
            cartProducts={ products }
            setCartProducts={ setProducts }
          />
        ))
      ) : (
        <div className="empty-message" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
