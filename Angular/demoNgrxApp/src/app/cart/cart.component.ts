import { Component } from '@angular/core';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { IProduct } from '../shared/models/product.interface';
import { cartSelector } from '../states/cart/cart.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import {
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from '../states/cart/cart.action';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems$!: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {
    this.cartItems$ = this.store.select(cartSelector);
  }

  removeFromCart = (productId: number) => {
    this.store.dispatch(removeFromCart({ productId }));
  };

  decrement = (productId: number, quantity: number) => {
    if (quantity <= 1) {
      this.store.dispatch(removeFromCart({ productId }));
    } else {
      this.store.dispatch(decrementProduct({ productId, quantity }));
    }
  };

  increment = (productId: number) => {
    this.store.dispatch(incrementProduct({ productId }));
  };
}
