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
}

export const initialCartState: cartState = {
  products: [],
};

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => {
    const updatedProduct = [...state.products, product];
    console.log('updatedProduct:', updatedProduct);
    return {
      ...state,
      products: updatedProduct,
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
    };
  }),
  on(removeFromCart, (state, { productId }) => {
    const updatedProducts = state.products.filter(
      (product) => product.id != productId
    );
    return {
      ...state,
      products: updatedProducts,
    };
  })
);
