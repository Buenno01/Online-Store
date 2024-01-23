import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Layout from './components/Layout';
import { ProductType } from './@types/ProductType';
import ShoppingCar from './pages/ShoppingCar';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
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
          /> }
        />
        <Route path="/carrinho" element={ <ShoppingCar /> } />
        <Route
          path="/product-details/:productId"
          element={ <ProductDetails /> }
        />
      </Route>
    </Routes>
  );
}

export default App;
