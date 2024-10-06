import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import {
  counterSelector,
  selectCounterState,
} from '../states/counter/counter.selector';
import { IProduct } from '../shared/models/product.interface';
import {
  cartSelector,
  totalQuantitySelector,
} from '../states/cart/cart.selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  count$!: Observable<number>;
  products$!: Observable<IProduct[]>;
  totalQuantity$!: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(counterSelector);
    this.products$ = this.store.select(cartSelector);
    this.totalQuantity$ = this.store.select(totalQuantitySelector);
  }
}
