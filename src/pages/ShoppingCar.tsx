import React, { useEffect, useState } from 'react';
import ShoppingItem from '../components/ShoppingItem';

interface CartItem {
  id: string;
  title: string;
  price: number;
}

function ShoppingCartEmptyPage() {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItem(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cartItem.length > 0 ? (
        cartItem.map((item: CartItem, index: number) => (
          <ShoppingItem
            key={ index }
            name={ item.title }
            price={ item.price }
            quantity={ 1 }
          />
        ))
      ) : (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      )}
    </div>
  );
}

export default ShoppingCartEmptyPage;
