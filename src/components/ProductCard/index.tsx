import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../@types/ProductType';

type ProductCardProps = {
  product: ProductType
};

function ProductCard({ product }: ProductCardProps) {
  const { thumbnail, title, price } = product;
  const navigate = useNavigate();
  return (
    <div data-testid="product">
      <img src={ thumbnail } alt={ title } />
      <h3>{title}</h3>
      <p>{price}</p>
      <button
        data-testid="product-detail-link"
        onClick={ () => {
          navigate(`/product-details/${product.id}`);
        } }
      >
        more details
      </button>
    </div>
  );
}

export default ProductCard;
