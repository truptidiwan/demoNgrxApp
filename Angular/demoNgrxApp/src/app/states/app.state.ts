import { cartState } from './cart/cart.reducer';
import { CounterState } from './counter/counter.reducer';
import { ProductState } from './product/product.reducer';

// create a global state or application state.
// This is a global store
export interface AppState {
  counter: CounterState;
  cart: cartState;
  product: ProductState;
}
