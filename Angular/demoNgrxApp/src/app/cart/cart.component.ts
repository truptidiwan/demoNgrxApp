import { Component } from '@angular/core';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { IProduct } from '../shared/models/product.interface';
import { cartSelector, totalPriceSelector } from '../states/cart/cart.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import {
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from '../states/cart/cart.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems$!: Observable<IProduct[]>;
  totalPrice$!: Observable<number>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.cartItems$ = this.store.select(cartSelector);
    this.totalPrice$ = this.store.select(totalPriceSelector);
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

  backToHome = () => {
    this.router.navigate(['/home']); // Specify the route you want to navigate to
  };
}
