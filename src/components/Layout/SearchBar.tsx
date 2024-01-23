import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { ProductType } from '../../@types/ProductType';

type SearchBarProps = {
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>
};

function SearchBar({ searchQuery, setSearchQuery, setSearchedProducts }: SearchBarProps) {
  const hanldeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(target.value);
  };

  const handleSearch = async () => {
    const data = await getProductsFromCategoryAndQuery('', searchQuery);
    setSearchedProducts(data.results as ProductType[]);
    console.log(data);
  };

  return (
    <form onSubmit={ (e) => { e.preventDefault(); } }>
      <input
        className="border border-gray-400"
        type="text"
        data-testid="query-input"
        placeholder="digite o nome do produto"
        value={ searchQuery }
        onChange={ (e) => { hanldeChange(e); } }
      />
      <button
        data-testid="query-button"
        onClick={ handleSearch }
      >
        Pesquisar

      </button>
    </form>
  );
}

export default SearchBar;
