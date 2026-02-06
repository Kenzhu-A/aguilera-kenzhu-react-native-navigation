import React, { createContext, useReducer, ReactNode } from 'react';
import { CartItem, CartState } from '../types/cart';
import { Product } from '../types/product';

type Action =
  | { type: 'addItem'; payload: Product }
  | { type: 'increaseQty'; payload: string }
  | { type: 'decreaseQty'; payload: string }
  | { type: 'removeItem'; payload: string }
  | { type: 'clearCart' };

const initialState: CartState = { items: [] };

const reducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'addItem': {
      const exists = state.items.find(i => i.id === action.payload.id);
      if (exists) {
        return {
          items: state.items.map(i =>
            i.id === exists.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...action.payload, quantity: 1 }] };
    }

    case 'increaseQty':
      return {
        items: state.items.map(i =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };

    case 'decreaseQty':
      return {
        items: state.items
          .map(i =>
            i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter(i => i.quantity > 0),
      };

    case 'removeItem':
      return { items: state.items.filter(i => i.id !== action.payload) };

    case 'clearCart':
      return { items: [] };

    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
