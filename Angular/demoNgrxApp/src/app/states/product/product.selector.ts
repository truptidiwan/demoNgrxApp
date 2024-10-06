import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';
import { AppState } from '../app.state';

export const selectProductFeature =
  createFeatureSelector<ProductState>('product');
export const selectProductState = (state: AppState) => state.product;

export const selectAllProducts = createSelector(
  selectProductFeature,
  (state: ProductState) => state.products
);

export const selectProductError = createSelector(
  selectProductFeature,
  (state: ProductState) => state.error
);

// export const selectAllProducts = createSelector(
//   selectProductState,
//   (state: ProductState) => state.products
// );

// export const selectProductError = createSelector(
//   selectProductState,
//   (state: ProductState) => state.error
// );
