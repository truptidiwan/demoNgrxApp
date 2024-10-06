import { inject, Injectable } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadProduct,
  loadProductFailure,
  loadProductSuccess,
} from './product.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class ProductEffect {
  private api = inject(ProductService);
  action$ = inject(Actions);

  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadProduct),
      switchMap(() =>
        this.api.getProducts().pipe(
          map((res) => {
            return loadProductSuccess({ products: res });
          }),
          catchError((error: { message: string }) =>
            of(
              loadProductFailure({
                errorMsg: 'Fail to load products',
              })
            )
          )
        )
      )
    )
  );
}
