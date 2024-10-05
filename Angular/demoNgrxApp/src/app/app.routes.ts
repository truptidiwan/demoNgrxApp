import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  { path: 'cart', component: CartComponent },
  { path: 'counter', component: CounterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
