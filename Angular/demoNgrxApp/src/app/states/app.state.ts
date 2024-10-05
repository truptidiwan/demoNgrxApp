import { CounterState } from './counter/counter.reducer';

// create a global state or application state.
// This is a global store
export interface AppState {
  counter: CounterState;
}
