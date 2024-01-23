import { Dispatch, SetStateAction, useState } from 'react';
import { CategoryType } from '../../@types/CategoryType';
import { ProductType } from '../../@types/ProductType';
import { getProductsByCategory } from '../../services/api';

type AsideProps = {
  categories: CategoryType[],
  setSearchedProducts: Dispatch<SetStateAction<ProductType[] | undefined>>
};

function Aside({ categories, setSearchedProducts }: AsideProps) {
  const getSelectedCategory = async (idCat: string) => {
    const { results } = await getProductsByCategory(idCat);
    const data = results
      .map((products: ProductType) => {
        return products as ProductType;
      });
    setSearchedProducts(data as ProductType[]);
  };
  // setSelectedProducts(data);
  // O comp aside, q contém a lista de categorias, deve contar com a função de busca por categoria, em cada um de seus buttons;
  // Com o resultado da busca, o array selectedProducts, deve ser renderizado na Home;
  // Com o comp de categorias formado, a lista recuperada, deve ser exibida;

  return (
    <aside>
      <aside>
        <h3>Categorias</h3>
        <hr />
        <nav>
          {
        categories.map(
          (e) => (
            <li key={ e.id }>
              <button
                data-testid="category"
                onClick={ () => getSelectedCategory(e.id) }
              >
                {e.name}
              </button>
            </li>
          ),
        )
        }

        </nav>
      </aside>
    </aside>
  );
}

export default Aside;
