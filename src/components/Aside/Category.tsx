type CategoryProps = {
  handleClick: () => void,
  name: string,
  isActive: boolean,
};

function Category({ handleClick, name, isActive }: CategoryProps) {
  return (
    <li className={ `list-none ${isActive && 'font-bold text-blue-600'}` }>
      <button
        data-testid="category"
        onClick={ handleClick }
      >
        {name}
      </button>
    </li>
  );
}

export default Category;
