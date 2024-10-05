import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';

// create counter state
export interface CounterState {
  count: number;
}

// initialize the counter state, reducer will maintain the initial state
export const initialCounterState: CounterState = {
  count: 0,
};

// create counter reducer depending on actions created
export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 }))
);
