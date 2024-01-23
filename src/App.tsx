import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Layout from './components/Layout';
import { ProductType } from './@types/ProductType';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { useLocalStorage } from './services/useLocalStorage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [
    soppingCartItems,
    setShoppingCartItems,
  ] = useLocalStorage<ProductType[]>('shoppingCart', []);
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
            searchQuery={ searchQuery }
            setSearchQuery={ setSearchQuery }
            setSearchedProducts={ setSearchedProducts }
          />
        }
      >
        <Route
          index
          element={ <Home
            setSearchedProducts={ setSearchedProducts }
            searchedProducts={ searchedProducts }
            setShoppingCartItems={ setShoppingCartItems }
            shoppingCartItems={ soppingCartItems }
          /> }
        />
        <Route path="/carrinho" element={ <ShoppingCart /> } />
        <Route
          path="/product-details/:productId"
          element={ <ProductDetails /> }
        />
      </Route>
    </Routes>
  );
}

export default App;
