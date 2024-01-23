import { CategoryType } from '../../@types/CategoryType';

type AsideProps = {
  categories: CategoryType[]
};

function Aside({ categories }: AsideProps) {
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
              <button data-testid="category">
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
