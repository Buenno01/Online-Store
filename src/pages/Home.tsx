import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import { CategoryType } from '../@types/CategoryType';
import Aside from '../components/Aside';
import ProductCard from '../components/ProductCard';
import { ProductType } from '../@types/ProductType';

type HomeProps = {
  searchedProducts: ProductType[] | undefined,
};

function Home({ searchedProducts }: HomeProps) {
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
      <Aside categories={ categories } />
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
    </main>
  );
}

export default Home;
