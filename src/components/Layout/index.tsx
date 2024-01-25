import { Outlet } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import SearchBar from './SearchBar';
import { ProductType } from '../../@types/ProductType';
import Logo from './Logo';

type LayoutProps = {
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>
};

function Layout({ searchQuery, setSearchQuery, setSearchedProducts }: LayoutProps) {
  return (
    <>
      <header
        className="flex flex-col py-2 gap-1
      bg-blue-600 shadow-lg content-center items-center"
      >
        <Logo />
        <SearchBar
          searchQuery={ searchQuery }
          setSearchQuery={ setSearchQuery }
          setSearchedProducts={ setSearchedProducts }
        />
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
