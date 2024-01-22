import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Layout from './components/Layout';
import { ProductType } from './@types/ProductType';

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
        <Route index element={ <Home searchedProducts={ searchedProducts } /> } />
      </Route>
    </Routes>
  );
}

export default App;
