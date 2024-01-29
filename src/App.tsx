import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Layout from './components/Layout';
import { ProductType } from './@types/ProductType';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import { useLocalStorage } from './services/useLocalStorage';
import { ShoppingCartProduct } from './@types/ShoppingCartProduct';
import CheckoutShop from './pages/FinishedShop/Index';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [
    shoppingCartItems,
    setShoppingCartItems,
  ] = useLocalStorage<ShoppingCartProduct[]>('shoppingCart', []);
  const [
    searchedProducts,
    setSearchedProducts,
  ] = useState<ProductType[] | undefined >(undefined);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            setLoading={ setLoading }
            searchQuery={ searchQuery }
            setSearchQuery={ setSearchQuery }
            setSearchedProducts={ setSearchedProducts }
            shoppingCartItems={ shoppingCartItems }
          />
        }
      >
        <Route
          index
          element={ <Home
            setLoading={ setLoading }
            loading={ loading }
            setSearchedProducts={ setSearchedProducts }
            searchedProducts={ searchedProducts }
            setShoppingCartItems={ setShoppingCartItems }
            shoppingCartItems={ shoppingCartItems }
          /> }
        />
        <Route path="/carrinho" element={ <ShoppingCart /> } />
        <Route
          path="/product-details/:productId"
          element={ <ProductDetails /> }
        />
        <Route path="/Checkout" element={ <CheckoutShop /> } />

      </Route>
    </Routes>
  );
}

export default App;
