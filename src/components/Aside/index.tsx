import { Dispatch, SetStateAction } from 'react';
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
