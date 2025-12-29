import {Routes} from '@angular/router';
import {homeComponentRoutes} from './home/home.component.routes';
import {authGuard} from './security/guards/auth.guard';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  {
    path      : '',
    redirectTo: '/home',
    pathMatch : 'full'
  },
  {
    path     : 'login',
    component: LoginComponent,
  },

  {
    path         : 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    canActivate: [authGuard],
    children     : homeComponentRoutes
  }
];
