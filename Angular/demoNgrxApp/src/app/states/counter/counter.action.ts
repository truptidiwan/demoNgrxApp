import { createAction } from '@ngrx/store';

// create a new action with ex. incrementing, decrementing, resetting
export const increment = createAction('[Counter Component] Incremernt');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
