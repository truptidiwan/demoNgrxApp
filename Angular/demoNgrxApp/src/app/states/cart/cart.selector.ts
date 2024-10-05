import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { cartState } from './cart.reducer';

export const selectCartState = (state: AppState) => state.cart;

// create a selector for cart state
export const cartSelector = createSelector(
  selectCartState,
  (state: cartState) => state.products
);
