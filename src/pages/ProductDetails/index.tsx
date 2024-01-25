import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductType } from '../../@types/ProductType';
import { getProductById } from '../../services/api';
import { useLocalStorage } from '../../services/useLocalStorage';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';
import Comment from '../../components/Comment';
import NewCommentForm from '../../components/NewCommentForm';
import { CommentFormType } from '../../@types/CommentFormType';

function ProductDetail() {
  const { productId } = useParams<{ productId?: string }>();
  const [
    cartProducts,
    setCartProducts,
  ] = useLocalStorage<ShoppingCartProduct[]>('shoppingCart', [] as ShoppingCartProduct[]);
  const [
    comments,
    setComments,
  ] = useLocalStorage<CommentFormType[]>(productId as string, []);
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const getIdProduct = async () => {
      // console.log('Obtendo detalhes do produto...');
      if (productId) {
        try {
          const productData = await getProductById(productId);
          setProduct(productData);
        } catch (error) {
          console.error('Erro ao obter detalhes do produto:', error);
        }
      }
    };
    getIdProduct();
  }, [productId]);
  if (!product) {
    return <p>Carregando...</p>;
  }
  const { title, thumbnail, price, shipping } = product;

  const handleAddToCart = () => {
    const itemIndex = cartProducts.findIndex((item) => item.id === product.id);

    if (itemIndex === -1) {
      setCartProducts([
        ...cartProducts,
        { ...product, quantityOnShoppingCart: 1 },
      ]);
    } else {
      const copy = cartProducts.map((current, index) => {
        const item = current;
        item.quantityOnShoppingCart = index === itemIndex
          ? (current.quantityOnShoppingCart + 1)
          : current.quantityOnShoppingCart;
        return item;
      });
      setCartProducts([...copy]);
    }
  };

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
      {shipping && shipping.free_shipping && (
        <p data-testid="free-shipping">
          Frete Grátis
        </p>
      )}
      <button data-testid="product-detail-add-to-cart" onClick={ handleAddToCart }>
        Adicionar ao Carrinho
      </button>
      <Link to="/carrinho">
        <button data-testid="shopping-cart-button">Ir para o Carrinho</button>
      </Link>
      <NewCommentForm
        setComments={ setComments }
        comments={ comments }
      />
      {
        comments.map((comment) => (
          <Comment
            key={ comment.email + comment.rating }
            text={ comment.text }
            email={ comment.email }
            rating={ comment.rating }
          />
        ))
      }
    </div>
  );
}
export default ProductDetail;
