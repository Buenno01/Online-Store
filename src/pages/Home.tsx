import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import { CategoryType } from '../@types/CategoryType';
import Aside from '../components/Aside';

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <main>
      <Aside categories={ categories } />
      <div data-testid="home-initial-message">
        {
        products.length === 0
         && 'Digite algum termo de pesquisa ou escolha uma categoria.'
      }
      </div>
    </main>
  );
}

export default Home;
