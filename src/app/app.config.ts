import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {AUTH_API, AuthApi} from './security/api/auth.api';
import {environment} from '../environments/environment';
import {AuthApiHttp} from './security/api/auth.api.prod';
import {AuthApiMock} from './security/api/auth.api.mock';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: AUTH_API,
      useFactory: (): AuthApi => {
        const impl = environment.useMockApi ? new AuthApiMock() : new AuthApiHttp();
        console.info('[DI] AUTH_API ->', impl.constructor.name, '(useMockApi=', environment.useMockApi, ')');
        return impl;
      }
    }
  ]
};
