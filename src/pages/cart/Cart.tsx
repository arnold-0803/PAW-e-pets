import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/Shopping-Context';
import { CartItem } from './Cart-Item';
import "./Cart.css";
import useFetch from '../../assets/useFetch';

export const Cart: React.FC = () => {

  const { data } = useFetch("https://pixabay.com/api/?key=43296904-a69d2147a6885fcb843b07884&q=cats+dogs&per_page=12");
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { cart, getCartTotal } = cartContext;
  const totalAmount = getCartTotal();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cart-page">
      <div className="cart-content">
        <h3>Your Cart Items</h3>
      </div>
      <div className="cart-item-wrapper">
        {data.map(item => {
          const cartItem = cart.find(cartItem => cartItem.id === item.id);
          if (cartItem && cartItem.quantity !== 0) {
            return (
              <CartItem key={item.id} 
                data={item}
                cartItem={cartItem}
              />
            );
          }
          return null;
        })}
      </div>
      <div className='checkout-wrapper'>
        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: <b>${getCartTotal()}</b></p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};
