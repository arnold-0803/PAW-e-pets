import React, { createContext, useState, ReactNode } from 'react';
import { CartContextType, CartItem } from '../assets/types';
import { PetsData } from '../data/PetsData';

const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (id: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevCart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          return prevCart.filter(item => item.id !== id);
        }
      }
      return prevCart;
    });
  };

  const updateItem = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, cartItem) => {
      const pet = PetsData.find(pet => pet.id === cartItem.id);
      if (pet) {
        return total + pet.price * cartItem.quantity;
      }
      return total;
    }, 0);
  }
  
  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateItem, 
      getCartTotal
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

