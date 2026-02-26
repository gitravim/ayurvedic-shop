import { createContext, useContext, useReducer, useState } from 'react';
import { products } from '../data/products';

const CartContext = createContext(null);

const BUNDLE_DISCOUNT = 0.10; // 10% off when 3+ unique items

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.product, qty: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case 'UPDATE_QTY': {
      if (action.qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== action.id) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: action.qty } : i
        ),
      };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isOpen, setIsOpen] = useState(false);

  const uniqueItemCount = state.items.length;
  const isBundleEligible = uniqueItemCount >= 3;

  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const bundleDiscount = isBundleEligible ? subtotal * BUNDLE_DISCOUNT : 0;
  const total = subtotal - bundleDiscount;
  const totalItems = state.items.reduce((sum, i) => sum + i.qty, 0);

  function addItem(product) {
    dispatch({ type: 'ADD_ITEM', product });
    setIsOpen(true);
  }
  function removeItem(id) { dispatch({ type: 'REMOVE_ITEM', id }); }
  function updateQty(id, qty) { dispatch({ type: 'UPDATE_QTY', id, qty }); }
  function clearCart() { dispatch({ type: 'CLEAR' }); }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        subtotal,
        bundleDiscount,
        total,
        totalItems,
        isBundleEligible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
