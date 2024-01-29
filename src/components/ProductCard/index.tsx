import { Link } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { ProductType } from '../../@types/ProductType';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';
import AddToCartBtn from '../Atoms/AddToCartBtn';

type ProductCardProps = {
  product: ProductType,
  shoppingCartItems: ShoppingCartProduct[],
  setShoppingCartItems: Dispatch<SetStateAction<ShoppingCartProduct[]>>,
};

function ProductCard({ product, setShoppingCartItems,
  shoppingCartItems }: ProductCardProps) {
  const { thumbnail, title, price, shipping } = product;

  const addToShoppingCart = (productObject: ProductType) => {
    const itemIndex = shoppingCartItems.findIndex((item) => item.id === product.id);

    if (itemIndex === -1) {
      setShoppingCartItems([
        ...shoppingCartItems,
        { ...productObject, quantityOnShoppingCart: 1 },
      ]);
    } else {
      const copy = shoppingCartItems.map((current, index) => {
        const item = current;
        item.quantityOnShoppingCart = index === itemIndex
          ? (current.quantityOnShoppingCart + 1)
          : current.quantityOnShoppingCart;
        return item;
      });
      setShoppingCartItems([...copy]);
    }
  };

  return (
    <div
      className="relative w-48 flex flex-col justify-center items-center h-64
      shadow-md rounded-lg"
      data-testid="product"
    >
      <Link
        className="text-sm hover:text-blue-400
        flex flex-col justify-center items-center"
        data-testid="product-detail-link"
        to={ `/product-details/${product.id}` }
      >
        <img
          className="max-w-48 max-h-32"
          src={ thumbnail }
          alt={ title }
        />
        <span className="flex flex-col justify-center px-2">
          <h3
            data-testid="shopping-cart-product-name"
          >
            {title}
          </h3>
          <h2 className="text-3xl font-medium text-center">
            {
            parseFloat(price).toFixed(2).toString().split('.')
              .join(',')
          }
          </h2>
          {
          shipping && shipping.free_shipping
          && (
            <p
              className="text-emerald-500 text-md font-semibold text-center"
              data-testid="free-shipping"
            >
              Frete Grátis
            </p>
          )
        }
        </span>
      </Link>
      <AddToCartBtn handleClick={ () => { addToShoppingCart(product); } } />
    </div>
  );
}

export default ProductCard;
