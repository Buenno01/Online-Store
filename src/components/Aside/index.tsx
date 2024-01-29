import { Dispatch, SetStateAction, useState } from 'react';
import { CategoryType } from '../../@types/CategoryType';
import { ProductType } from '../../@types/ProductType';
import { getProductsByCategory } from '../../services/api';
import Category from './Category';

type AsideProps = {
  categories: CategoryType[],
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>,
  setCategoriesVisibility: Dispatch<SetStateAction<boolean>>,
  categoriesVisibility: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>,
};

function Aside({ categories, setSearchedProducts,
  categoriesVisibility, setCategoriesVisibility, setLoading }: AsideProps) {
  const [activeCategory, setActiveCategory] = useState<string>('');

  const getSelectedCategory = async (categoryId: string) => {
    setCategoriesVisibility(false);
    setLoading(true);
    setActiveCategory(categoryId);
    const { results } = await getProductsByCategory(categoryId);
    const data = results
      .map((products: ProductType) => {
        return products as ProductType;
      });
    setSearchedProducts(data as ProductType[]);
    setLoading(false);
  };

  return (
    <>
      <div className="h-12 w-full" />
      <aside
        className="flex flex-col w-full bg-white absolute z-40"
      >
        <button
          onClick={ () => { setCategoriesVisibility(!categoriesVisibility); } }
        >
          <h2
            className="font-bold text-lg text-center py-1
          shadow-md"
          >
            Categorias
          </h2>
        </button>
        <hr />
        <nav
          className={ `flex-col text-gray-600 font-normal 
        gap-2 px-6 top-14 bg-white overflow-y-scroll
        ${categoriesVisibility ? 'flex' : 'hidden'}` }
        >
          {
          categories.map((category) => (
            <Category
              key={ category.id }
              isActive={ activeCategory === category.id }
              handleClick={ () => { getSelectedCategory(category.id); } }
              name={ category.name }
            />
          ))
          }
        </nav>
      </aside>
      <button
        aria-label="fechar categorias"
        onClick={ () => { setCategoriesVisibility(false); } }
        className={ `${categoriesVisibility ? 'absolute' : 'hidden'}
        w-full h-full z-20 bg-black opacity-20` }
      />
    </>
  );
}

export default Aside;
