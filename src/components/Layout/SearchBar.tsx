import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
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
    <form
      className="flex border bg-white border-gray-200 p-1 m-auto"
      onSubmit={ (e) => { e.preventDefault(); } }
    >
      <input
        type="text"
        className="w-40"
        data-testid="query-input"
        placeholder="Busque um produto"
        value={ searchQuery }
        onChange={ (e) => { hanldeChange(e); } }
      />
      <button
        className="text-emerald-400 px-1"
        data-testid="query-button"
        onClick={ handleSearch }
      >
        <FaMagnifyingGlass />
      </button>
    </form>
  );
}

export default SearchBar;
