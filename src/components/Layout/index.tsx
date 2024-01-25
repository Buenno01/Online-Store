import { Outlet } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import SearchBar from './SearchBar';
import { ProductType } from '../../@types/ProductType';
import ShopButton from '../ShoppingButton/ShoppingButton';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';

type LayoutProps = {
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>
  shoppingCartItems: ShoppingCartProduct [],
};

function Layout({ searchQuery, setSearchQuery,
  setSearchedProducts, shoppingCartItems }: LayoutProps) {
  return (
    <>
      <header>
        <SearchBar
          searchQuery={ searchQuery }
          setSearchQuery={ setSearchQuery }
          setSearchedProducts={ setSearchedProducts }
        />
        <h1>
          Online Store
        </h1>
        <ShopButton shoppingCartItems={ shoppingCartItems } />
        <hr />
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
