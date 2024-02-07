import { Link } from 'react-router-dom';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';
import { useLocalStorage } from '../../services/useLocalStorage';
import ProductListItem from '../../components/ProductListItem';

function ShoppingCart() {
  const [
    products,
    setProducts,
  ] = useLocalStorage<ShoppingCartProduct[]>('shoppingCart', [] as ShoppingCartProduct[]);

  return (
    <main
      className="px-10 py-5 flex flex-col gap-4 items-center w-full"
    >
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
      <div>
        <Link
          className="bg-emerald-400 text-white px-4 py-2 rounded-md
          hover:bg-opacity-70 active:bg-opacity-80"
          to="/Checkout"
          data-testid="checkout-products"
        >
          Finalizar Compras
        </Link>
      </div>
    </main>
  );
}

export default ShoppingCart;
