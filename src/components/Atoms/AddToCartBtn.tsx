import { FaCartPlus } from 'react-icons/fa6';

type AddToCartBtnProps = {
  handleClick: () => void,
};

function AddToCartBtn({ handleClick }: AddToCartBtnProps) {
  return (
    <button
      className="text-white text-2xl absolute top-2 right-2
      bg-blue-500 rounded-full w-9 h-9
      flex justify-center items-center"
      aria-label="Adicionar produto ao carrinho"
      onClick={ handleClick }
      data-testid="product-add-to-cart"
    >
      <FaCartPlus />
    </button>
  );
}

export default AddToCartBtn;
