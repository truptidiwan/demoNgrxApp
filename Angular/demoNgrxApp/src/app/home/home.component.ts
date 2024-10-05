import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { IProduct } from '../shared/models/product.interface';
import { ProductService } from '../shared/services/product.service';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { cartSelector } from '../states/cart/cart.selector';
import { addToCart } from '../states/cart/cart.action';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  http = inject(HttpClient);
  productService = inject(ProductService);
  product$ = this.productService.getProducts() as Observable<IProduct[]>;

  constructor(private store: Store<{ cart: { products: IProduct[] } }>) {}

  handleAddToCart = (product: IProduct) => {
    this.store.dispatch(addToCart({ product }));
  };
}
