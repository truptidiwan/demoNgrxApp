import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { cartReducer } from './states/cart/cart.reducer';
import { ProductReducer } from './states/product/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './states/product/product.effect';

// Import the provideState and provideEffects in config file
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'cart', reducer: cartReducer }),
    provideState({ name: 'product', reducer: ProductReducer }),
    provideEffects(ProductEffect),
    provideHttpClient(withFetch()),
  ],
};
