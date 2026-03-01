import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthApi, LoginResponse} from './auth.api';
import {ApiResult} from '../../api/api-result.model';

@Injectable()
export class AuthApiHttp implements AuthApi {
  login(username: string, password: string): Observable<ApiResult<LoginResponse>> {
    // TODO: implement with HttpClient + environment.apiBaseUrl
    throw new Error('AuthApiHttp not implemented yet');
  }
}
