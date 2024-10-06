import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../shared/models/product.interface';

// create action takes two arguments
//1. the type of action
//2. the props (optional) - props is a function which you need to call
export const addToCart = createAction(
  '[Cart Component] addToCart',
  props<{ product: IProduct }>()
);
export const incrementProduct = createAction(
  '[Cart Component] incrementProduct',
  props<{ productId: number }>()
);
export const decrementProduct = createAction(
  '[Cart Component] decrementProduct',
  props<{ productId: number; quantity: number; totalQuantity: number }>()
);
export const removeFromCart = createAction(
  '[Cart Component] removeFromCart',
  props<{ productId: number; quantity: number; totalQuantity: number }>()
);
