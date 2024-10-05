import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../shared/models/product.interface';
import {
  addToCart,
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from './cart.action';

export interface cartState {
  products: IProduct[];
  totalPrice: number;
}

export const initialCartState: cartState = {
  products: [],
  totalPrice: 0,
};

export function calculateTotalPrice(products: IProduct[]) {
  return products.reduce((totalPrice, product) => {
    return totalPrice + product.price * product.quantity;
  }, 0);
}

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => {
    const updatedProducts = [...state.products, product];
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
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
    };
  }),
  on(decrementProduct, (state, { productId, quantity }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  }),
  on(removeFromCart, (state, { productId }) => {
    const updatedProducts = state.products.filter(
      (product) => product.id != productId
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  })
);
