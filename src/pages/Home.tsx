import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import { CategoryType } from '../@types/CategoryType';
import Aside from '../components/Aside';
import ProductCard from '../components/ProductCard';
import { ProductType } from '../@types/ProductType';
import { ShoppingCartProduct } from '../@types/ShoppingCartProduct';

type HomeProps = {
  searchedProducts: ProductType[] | undefined,
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>,
  shoppingCartItems: ShoppingCartProduct[],
  setShoppingCartItems: Dispatch<SetStateAction<ShoppingCartProduct[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  loading: boolean,
};

function Home({ searchedProducts, setSearchedProducts, loading, setLoading,
  setShoppingCartItems, shoppingCartItems }: HomeProps) {
  const [categoriesVisibility, setCategoriesVisibility] = useState(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <main className="flex flex-col relative">
      <Aside
        setCategoriesVisibility={ setCategoriesVisibility }
        categoriesVisibility={ categoriesVisibility }
        categories={ categories }
        setSearchedProducts={ setSearchedProducts }
        setLoading={ setLoading }
      />
      <section className="flex flex-col items-center gap-3">
        {
        searchedProducts as ProductType[] && !loading
        && searchedProducts?.map(
          (product) => (
            <ProductCard
              shoppingCartItems={ shoppingCartItems }
              setShoppingCartItems={ setShoppingCartItems }
              key={ product.id }
              product={ product }
            />),
        )
}
      </section>
      <div
        className="text-gray-400 text-2xl font-bold text-center mt-10"
        data-testid="home-initial-message"
      >
        {
        loading
          && 'Carregando...'
        }
        {
        !searchedProducts && !loading
          && 'Digite algum termo de pesquisa ou escolha uma categoria.'
        }
      </div>
      <div />
    </main>
  );
}

export default Home;
