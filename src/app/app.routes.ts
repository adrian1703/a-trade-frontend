import {Routes} from '@angular/router';
import {homeComponentRoutes} from './home/home.component.routes';

export const routes: Routes = [
  {
    path      : '',
    redirectTo: '/home',
    pathMatch : 'full'
  },
  {
    path         : 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    children     : homeComponentRoutes
  }
];
