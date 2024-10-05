import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCounterState = (state: AppState) => state.counter;

// create a selector for counter state
export const counterSelector = createSelector(
  selectCounterState,
  (state) => state.count
);
