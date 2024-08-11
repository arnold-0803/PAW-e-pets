import { ChangeEvent, useContext } from "react";
import { CartItemProps } from "../../assets/types";
import { PetsData } from "../../data/PetsData";
import { CartContext } from "../../context/Shopping-Context";



export const CartItem: React.FC<CartItemProps> = ({ data, cartItem }) => {

  const localPet = PetsData.find(pet => pet.id === data.id);
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { addToCart, removeFromCart, updateItem } = cartContext;

  const handleAddToCart = () => {
    if (data) {
      addToCart(data.id);
    }
  };

  const handleRemoveFromCart = () => {
    if (data) {
      removeFromCart(data.id);
    }
  };

  const handleUpdateItem = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateItem(data.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <div className="image">
        <img src={data.webformatURL} alt={data.tags} />
      </div>
      <div className="details-wrapper">
      <div className="details">
        <h4>{data.tags}</h4>
        <p>Quantity: {cartItem.quantity}</p>
        {localPet && (
          <p>Price: <b>${localPet.price}</b></p>
        )}
      </div>
      <div className="countHandler">
        <button onClick={handleRemoveFromCart}>-</button>
        <input 
          value={cartItem.quantity} 
          onChange={handleUpdateItem} 
          min="0"
        />
        <button onClick={handleAddToCart}>+</button>
      </div>
      </div>
    </div>
  );
};
