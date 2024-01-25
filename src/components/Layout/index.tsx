import { Outlet } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import SearchBar from './SearchBar';
import { ProductType } from '../../@types/ProductType';
import ShopButton from '../ShoppingButton/ShoppingButton';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';
import Logo from './Logo';

type LayoutProps = {
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>
  shoppingCartItems: ShoppingCartProduct [],
};

function Layout({ searchQuery, setSearchQuery,
  setSearchedProducts, shoppingCartItems }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <header
        className="flex md:flex-col p-2 gap-2
        bg-blue-600 shadow-lg content-center items-center"
      >
        <Logo />
        <SearchBar
          searchQuery={ searchQuery }
          setSearchQuery={ setSearchQuery }
          setSearchedProducts={ setSearchedProducts }
        />
        <ShopButton shoppingCartItems={ shoppingCartItems } />
        <hr />
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
