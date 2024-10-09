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
import { loadProduct } from '../states/product/product.action';
import {
  selectAllProducts,
  selectProductError,
} from '../states/product/product.selector';

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
  // product$!: Observable<IProduct[]>;
  error!: Observable<string | null>;

  product$ = this.productService.getProducts() as Observable<IProduct[]>;

  constructor(private store: Store<{ cart: { products: IProduct[] } }>) {
    this.store.dispatch(loadProduct());
    // this.product$ = this.store.select(selectAllProducts);
    this.error = this.store.select(selectProductError);

    // this.product$ = this.store.select(selectAllProducts);
  }

  handleAddToCart = (product: IProduct) => {
    this.store.dispatch(addToCart({ product }));
  };
}
