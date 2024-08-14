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

export interface CartContextType{
  cart: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  updateItem: (id: number, quantity: number) => void;
  getCartTotal: () => number;
}


// Types for HeroSection
export type DescriptionList = {
  list1: string;
  list2: string;
  list3: string;
  list4: string;
  bullets: string
}


// Types for Slider comp.
import { SwiperProps } from "swiper/react";

export interface ReviewDataTypes{
  image: string;
  personName: string;
  testimony: string
}

export interface ReviewProps{
  reviews: ReviewDataTypes[];
}

export interface SlideSectionProps extends ReviewProps {
  spaceBetween?: SwiperProps['spaceBetween'];
  slidesPerView?: SwiperProps['slidesPerView'];
  loop?: SwiperProps['loop'];
  autoplay?: SwiperProps['autoplay'];
  navigation?: SwiperProps['navigation'];
  pagination?: SwiperProps['pagination'];
  breakpoints?: SwiperProps['breakpoints'];
}


// Types for Elementor Data
export type ElementorTypes = {
  figure: number | string;
  description: string;
  icon: string;
  symbol: string;
}
