import { InjectionToken } from '@angular/core';
import { ApiResult } from '../../api/api-result.model';
import { Observable } from 'rxjs';

export interface LoginResponse {
  token: string;
}

export interface AuthApi {
  login(username: string, password: string): Observable<ApiResult<LoginResponse>>;
}

export const AUTH_API = new InjectionToken<AuthApi>('AUTH_API');
