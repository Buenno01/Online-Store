import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { ProductType } from '../../@types/ProductType';

type SearchBarProps = {
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
};

function SearchBar({ searchQuery, setSearchQuery,
  setSearchedProducts, setLoading }: SearchBarProps) {
  const navigate = useNavigate();
  const hanldeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    navigate('/');
    const data = await getProductsFromCategoryAndQuery('', searchQuery);
    setSearchedProducts(data.results as ProductType[]);
    setLoading(false);
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
