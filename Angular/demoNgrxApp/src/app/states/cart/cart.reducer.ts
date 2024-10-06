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
  totalQuantity: number;
}

export const initialCartState: cartState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export function calculateTotalPrice(products: IProduct[]) {
  return products.reduce((totalPrice, product) => {
    return totalPrice + product.price * product.quantity;
  }, 0);
}

export function calculateTotalQuantity(products: IProduct[]) {
  return products.reduce((quantity, product) => {
    return quantity + product.quantity;
  }, 0);
}

export function calculatetotalQuantityReduced(
  products: IProduct[],
  totalQuantity: number
) {
  return products.reduce((quantity, product) => {
    return totalQuantity - 1;
  }, 0);
}

export function calculatetotalQuantityWhenRemovedFromCart(
  products: IProduct[],
  totalQuantity: number
) {
  return products.reduce((quantity, product) => {
    return totalQuantity - product.quantity;
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
      totalQuantity: calculatetotalQuantityReduced(
        updatedProducts,
        totalQuantity
      ),
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
      totalQuantity: calculatetotalQuantityWhenRemovedFromCart(
        updatedProducts,
        totalQuantity
      ),
    };
  })
);
