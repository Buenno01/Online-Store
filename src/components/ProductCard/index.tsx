import { ProductType } from '../../@types/ProductType';

type ProductCardProps = {
  product: ProductType
};

function ProductCard({ product }: ProductCardProps) {
  const { thumbnail, title, price } = product;
  return (
    <div data-testid="product">
      <img src={ thumbnail } alt={ title } />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
