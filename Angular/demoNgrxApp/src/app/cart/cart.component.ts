import { Component } from '@angular/core';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { IProduct } from '../shared/models/product.interface';
import { cartSelector } from '../states/cart/cart.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';

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
    console.log('this.cartItems$:', this.cartItems$);
  }
}
