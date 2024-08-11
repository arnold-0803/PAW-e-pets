import React, { useContext } from 'react';
import { PetsData } from '../../data/PetsData';
import { Props } from '../../assets/types';
import { CartContext } from '../../context/Shopping-Context';

const Pet: React.FC<Props> = ({data}) => {

  const { id, tags, webformatURL} = data;
  const localPet = PetsData.find(pet => pet.id === data.id);
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { addToCart, cart } = cartContext;

  const handleAddToCart = () => {
    if (localPet) {
      addToCart(localPet.id);
    }
  };

  const cartItem = cart.find(item => item.id === id);
  const cartItemAmount = cartItem ? cartItem.quantity : 0;


  return (
    <div className="card">
      <div className="image">
        <img src={webformatURL} alt="" />
      </div>
      <h4>{tags}</h4>
      {localPet && (
        <div className="overlayer-content">
          <div className="pet-specs">
            <p><i className={localPet.icon}></i> {localPet.specs}</p>
            <p><i className={localPet.icon}></i> {localPet.specs}</p>
            <p><i className={localPet.icon}></i> {localPet.specs}</p>
          </div>
          <b>${localPet.price}</b>
          <button onClick={handleAddToCart}>
            Add Order<i className='fa-solid fa-cart-shopping'></i>
            {cartItemAmount > 0 && <span>({cartItemAmount})</span>}
          </button>
        </div>
      )}
    </div>
  );
}

export default Pet;