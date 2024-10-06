import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../shared/models/product.interface';

export const loadProduct = createAction('[Product Component] loadProducts');
export const loadProductSuccess = createAction(
  '[Product Component] loadProductsSuccess',
  props<{ products: IProduct[] }>()
);
export const loadProductFailure = createAction(
  '[Product Component] loadProductsFailure',
  props<{ errorMsg: string }>()
);
