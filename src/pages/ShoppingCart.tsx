import { Dispatch, SetStateAction } from 'react';
import { ProductType } from '../@types/ProductType';
import ProductCard from '../components/ProductCard';
import { useLocalStorage } from '../services/useLocalStorage';

type ShoppingCartProps = {
  products: ProductType[],
  setProducts: Dispatch<SetStateAction<ProductType[]>>
};

interface ShoppingCartProduct extends ProductType {
  quantity: number,
}

function ShoppingCart() {
  const [
    products,
    setProducts,
  ] = useLocalStorage<ProductType[]>('shoppingCart', [] as ProductType[]);
  const filteredProducts = products.reduce((acc, current, index, arr) => {
    const newArrayFilter = acc.filter((e) => e.id === current.id);
    const quantity = arr.filter((e) => e.id === current.id).length;
    const newItem: ShoppingCartProduct = current as ShoppingCartProduct;
    newItem.quantity = quantity;

    if (newArrayFilter.length === 0) {
      return [...acc, newItem];
    }

    return acc;
  }, [] as ShoppingCartProduct[]);
  return (
    <div className="shopping-cart-empty-page">
      <h1>Carrinho de Compras</h1>

      {products.length !== 0 ? (
        filteredProducts.map((item) => (
          <ProductCard
            key={ item.id }
            product={ item }
            setShoppingCartItems={ setProducts }
            shoppingCartItems={ products }
            quantity={ item.quantity }
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
