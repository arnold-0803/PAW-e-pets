// Type for useFetch custom hook
export type DataShape = {
  webformatURL: string;
  tags: string;
  id: number;
}

// Type for MenuData
export interface Item {
  title: string;
  link: string;
  icon: string;
}

// Types for PetsData
export interface PetsProperties {
  specs: string;
  price: number;
  icon: string;
  id: number;
}

// Type for Pet & Cart comp.
export type Props = {
  data: DataShape
}


// Types for Cart-Item
export interface CartItemProps extends Props {
  cartItem: {
    quantity: number;
  };
}


// Types for shopping-context
export interface CartItem {
  id: number;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  updateItem: (id: number, quantity: number) => void;
  getCartTotal: () => number;
}
