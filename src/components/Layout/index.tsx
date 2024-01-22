import { Outlet } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import SearchBar from './SearchBar';
import { ProductType } from '../../@types/ProductType';

type LayoutProps = {
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>
};

function Layout({ searchQuery, setSearchQuery, setSearchedProducts }: LayoutProps) {
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
        <hr />
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
