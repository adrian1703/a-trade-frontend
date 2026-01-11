import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router          = inject(Router);
  const authService     = inject(AuthService);
  // Replace this with your actual authentication logic
  const isAuthenticated = false; // Example: check your auth service or token

  if (isAuthenticated) {
    return true;
  } else {
    return router.navigate(['/login']);
  }
};
