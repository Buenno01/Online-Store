interface ShoppingCartItemProps {
  name: string;
  price: number;
  quantity: number;
}

function ShoppingItem({ name, price, quantity }: ShoppingCartItemProps) {
  return (
    <div>
      <p data-testid="shopping-cart-product-name">{name}</p>
      <p>
        Preço: R$
        {price}
      </p>
      <p data-testid="shopping-cart-product-quantity">
        Quantidade:
        {quantity}
      </p>
      <hr />
    </div>
  );
}

export default ShoppingItem;
