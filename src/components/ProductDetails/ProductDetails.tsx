import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductType } from '../../@types/ProductType';
import { getProductById } from '../../services/api';

function ProductDetail() {
  const params = useParams<{ productId?: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const getIdProduct = async () => {
      // console.log('Obtendo detalhes do produto...');
      if (params.productId) {
        try {
          const productData = await getProductById(params.productId);
          setProduct(productData);
        } catch (error) {
          console.error('Erro ao obter detalhes do produto:', error);
        }
      }
    };
    getIdProduct();
  }, [params.productId]);
  if (!product) {
    return <p>Carregando...</p>;
  }
  const { title, thumbnail, price } = product;
  return (
    <div>
      <h2 data-testid="product-detail-name">{title}</h2>
      <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
      <p data-testid="product-detail-price">
        R$
        {' '}
        {price}
        {' '}
      </p>
      <Link to="/carrinho">
        <button data-testid="shopping-cart-button">Ir para o Carrinho</button>
      </Link>
    </div>
  );
}
export default ProductDetail;
