import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import { CategoryType } from '../@types/CategoryType';
import Aside from '../components/Aside';
import ProductCard from '../components/ProductCard';
import { ProductType } from '../@types/ProductType';
import ShopButton from '../components/ShoppingButton/ShoppingButton';

type HomeProps = {
  searchedProducts: ProductType[] | undefined,
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>
};

function Home({ searchedProducts, setSearchedProducts }: HomeProps) {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <main className="flex">
      <Aside categories={ categories } setSearchedProducts={ setSearchedProducts } />
      <section>
        {
        searchedProducts as ProductType[]
        && searchedProducts?.map(
          (product) => <ProductCard key={ product.id } product={ product } />,
        )
}
      </section>
      <div data-testid="home-initial-message">
        {
        !searchedProducts
         && 'Digite algum termo de pesquisa ou escolha uma categoria.'
        }
      </div>
      <div>
        <ShopButton />
      </div>
    </main>
  );
}

export default Home;
