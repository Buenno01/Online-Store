import { useState } from 'react';
import { redirect } from 'react-router-dom';
import { useLocalStorage } from '../../services/useLocalStorage';
import { ShoppingCartProduct } from '../../@types/ShoppingCartProduct';

function CheckoutShop() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(true);
  const [paycard, setPayCard] = useState('');
  const [shoppingitems,
    setShoppingItem] = useLocalStorage<ShoppingCartProduct[]>('shoppingCart', []);

  const validation = (name === ''
|| email === ''
|| cpf === ''
|| phone === ''
|| cep === ''
|| address === ''
|| paycard === '');
  const handleClick = () => {
    if (validation) {
      setShowErrorMsg(true);
    } else {
      setShowErrorMsg(false);
      localStorage.clear();
      setShoppingItem([]);
      redirect('/');
    }
  };
  const totalValue:
  number = shoppingitems.reduce((total, item: ShoppingCartProduct) => {
    return total + item.price * item.quantityOnShoppingCart;
  }, 0);
  return (
    <div>
      {showErrorMsg
      && <p data-testid="error-msg">Campos inválidos</p>}
      <h2>Finalizar Compra</h2>
      <div>
        {shoppingitems.length > 0 ? (
          shoppingitems.map((item: ShoppingCartProduct, index: number) => (
            <div key={ index }>
              <p data-testid="shopping-cart-product-name">{item.title}</p>
              <p>
                Preço: R$
                {item.price}
              </p>
              <p data-testid="shopping-cart-product-quantity">
                {item.quantityOnShoppingCart}
              </p>
              <hr />
            </div>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
        <p data-testid="total-cart-value">
          Total: R$
          {' '}
          {totalValue.toFixed(2)}
        </p>
      </div>
      <form onSubmit={ (event) => event.preventDefault() }>
        <label htmlFor="name">Nome Completo:</label>
        <input
          data-testid="checkout-fullname"
          type="text"
          id="name"
          onChange={ (event) => setName(event.target.value) }
          value={ name }
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          data-testid="checkout-email"
          type="email"
          id="email"
          onChange={ (event) => setEmail(event.target.value) }
          value={ email }
          required
        />

        <label htmlFor="cpf">CPF:</label>
        <input
          data-testid="checkout-cpf"
          type="text"
          id="cpf"
          onChange={ (event) => setCpf(event.target.value) }
          value={ cpf }
          required
        />

        <label htmlFor="phone">Telefone:</label>
        <input
          data-testid="checkout-phone"
          type="text"
          id="phone"
          onChange={ (event) => setPhone(event.target.value) }
          value={ phone }
          required
        />

        <label htmlFor="cep">CEP:</label>
        <input
          data-testid="checkout-cep"
          type="text"
          id="cep"
          onChange={ (event) => setCep(event.target.value) }
          value={ cep }
          required
        />

        <label htmlFor="address">Endereço:</label>
        <input
          data-testid="checkout-address"
          type="text"
          id="address"
          onChange={ (event) => setAddress(event.target.value) }
          value={ address }
          required
        />

        <input
          data-testid="ticket-payment"
          type="radio"
          name="payment"
          id="Boleto"
          value="Boleto"
          onChange={ (event) => setPayCard(event.target.value) }
        />
        <label htmlFor="payment">Boleto</label>

        <input
          data-testid="master-payment"
          type="radio"
          name="payment"
          id="Mastercard"
          value="Mastercard"
          onChange={ (event) => setPayCard(event.target.value) }
        />
        <label htmlFor="payment">Mastercard</label>

        <input
          data-testid="elo-payment"
          type="radio"
          name="payment"
          id="Elo"
          value="Elo"
          onChange={ (event) => setPayCard(event.target.value) }
        />
        <label htmlFor="payment">Elo</label>

        <input
          data-testid="visa-payment"
          type="radio"
          name="payment"
          id="Visa"
          value="Visa"
          onChange={ (event) => setPayCard(event.target.value) }
        />
        <label htmlFor="payment">Visa</label>
        <button
          onClick={ handleClick }
          data-testid="checkout-btn"
          type="submit"
        >
          Finalizar Compra
        </button>
      </form>
    </div>
  );
}

export default CheckoutShop;
