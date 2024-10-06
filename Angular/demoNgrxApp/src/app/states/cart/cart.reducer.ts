import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../shared/models/product.interface';
import {
  addToCart,
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from './cart.action';

// Reducer will have initial state of cart and
// it will implement the business logic for the actions before updating the state

// Create interface for cart state
export interface cartState {
  products: IProduct[];
  totalPrice: number;
  totalQuantity: number;
}

// Initialize the cart interface
export const initialCartState: cartState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

// calculateTotalPrice function has logic to calculate the total price
export function calculateTotalPrice(products: IProduct[]) {
  return products.reduce((totalPrice, product) => {
    return totalPrice + product.price * product.quantity;
  }, 0);
}

// calculateTotalQuantity function has logic to calculate the total quantity
export function calculateTotalQuantity(products: IProduct[]) {
  return products.reduce((quantity, product) => {
    return quantity + product.quantity;
  }, 0);
}

// reducer function implements the business logic for all the actions
//1. 1st argument is initial state Provides a state value if the current state is undefined, as it is initially
//2. Association between actions and state change
export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => {
    const productExists = state.products.some(
      (currProduct) => product.id === currProduct.id
    );

    const updatedProducts = productExists
      ? state.products.map((currProduct) =>
          product.id === currProduct.id
            ? { ...currProduct, quantity: currProduct.quantity + 1 }
            : currProduct
        )
      : [...state.products, product];

    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
      totalQuantity: calculateTotalQuantity(updatedProducts),
    };
  }),
  on(incrementProduct, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
      totalQuantity: calculateTotalQuantity(updatedProducts),
    };
  }),
  on(decrementProduct, (state, { productId, quantity, totalQuantity }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
      totalQuantity: totalQuantity - 1,
    };
  }),
  on(removeFromCart, (state, { productId, quantity, totalQuantity }) => {
    const updatedProducts = state.products.filter(
      (product) => product.id != productId
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
      totalQuantity: totalQuantity - quantity,
    };
  })
);
