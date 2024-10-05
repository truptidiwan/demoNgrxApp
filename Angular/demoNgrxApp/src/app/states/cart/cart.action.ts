import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../shared/models/product.interface';

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
  props<{ productId: number; quantity: number }>()
);
export const removeFromCart = createAction(
  '[Cart Component] removeFromCart',
  props<{ productId: number }>()
);
