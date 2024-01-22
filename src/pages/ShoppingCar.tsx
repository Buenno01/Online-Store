import React, { useState } from 'react';

function ShoppingCartEmptyPage() {
  const [products, setProducts] = useState([]);

  return (
    <div className="shopping-cart-empty-page">
      <h1>Carrinho de Compras</h1>

      {products.length === 0 && (
        <div className="empty-message" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      )}
    </div>
  );
}

export default ShoppingCartEmptyPage;
