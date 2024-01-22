import { Link } from 'react-router-dom';

function ShopButton() {
  return (
    <div>
      <nav>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          <img src="" alt="Carrinho de compras" />
        </Link>
      </nav>
    </div>
  );
}
export default (ShopButton);
