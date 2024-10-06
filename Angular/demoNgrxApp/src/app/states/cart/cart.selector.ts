import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { cartState } from './cart.reducer';

// To retrieve data from the store, we need to create selector.

// Get the complete state of the cart from AppState
export const selectCartState = (state: AppState) => state.cart;

// create a selector for cart state
export const cartSelector = createSelector(
  selectCartState,
  (state: cartState) => state.products
);
// create a selector for total price
export const totalPriceSelector = createSelector(
  selectCartState,
  (state: cartState) => state.totalPrice
);

// create a selector for total quantity added
export const totalQuantitySelector = createSelector(
  selectCartState,
  (state: cartState) => state.totalQuantity
);
