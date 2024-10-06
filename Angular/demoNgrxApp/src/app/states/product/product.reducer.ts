import { createReducer, on } from '@ngrx/store';
import { loadProductFailure, loadProductSuccess } from './product.action';
import { IProduct } from '../../shared/models/product.interface';

export interface ProductState {
  products: IProduct[];
  error: string | null;
}

export const initialProductState: ProductState = {
  products: [],
  error: null,
};

export const ProductReducer = createReducer(
  initialProductState,
  on(loadProductSuccess, (state, { products }) => {
    return {
      ...state,
      products,
      error: null,
    };
  }),
  on(loadProductFailure, (state, { errorMsg }) => ({
    ...state,
    error: errorMsg,
  }))
);
