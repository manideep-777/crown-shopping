import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
    SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
    SET_CART_COUNT = 'cart/SET_CART_COUNT',
    SET_CART_TOTAL = 'cart/SET_CART_TOTAL',
  };

  export type CartItem = CategoryItem & {
    quantity: number;
  };

  // export type CartState = {
  //   readonly isCartOpen: boolean;
  //   readonly cartItems: CartItem[];
  //   readonly cartCount: number;
  //   readonly cartTotal: number;
  // };

  // export const CART_INITIAL_STATE: CartState = {
  //   isCartOpen: false,
  //   cartItems: [],
  //   cartCount: 0,
  //   cartTotal: 0,
  // };


