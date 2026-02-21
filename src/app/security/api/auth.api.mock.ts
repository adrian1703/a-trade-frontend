import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {AuthApi, LoginResponse} from './auth.api';
import {ApiError, ApiResult, toApiResult, toApiResultError} from '../../api/api-result.model';

const tokenAdmin: string   = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJVc2VybmFtZSI6IkFkcmlhbiIsImV4cCI6MTc2NzU0NDMzMywiaWF0IjoxNzY3NTQ0MzMzfQ.CGU_QEv2CvNbSJSBBOpgy7fRcb7PiQoR0Qgy8FVfyHI"
const tokenUser: string    = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVXNlciIsIlVzZXJuYW1lIjoiQWRyaWFuIiwiZXhwIjoxNzY3NTQyMjAyLCJpYXQiOjE3Njc1NDIyMDJ9.DFw14TIgyGfy1shxRi1f3TpJpvYqsBtsSG-pNVs0DEI"
const tokenUnknown: string = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVW5rbm93biIsIlVzZXJuYW1lIjoiQWRyaWFuIiwiZXhwIjoxNzY3NTQyMjAyLCJpYXQiOjE3Njc1NDIyMDJ9.d7A9iM8Fwnr4BRVZwIUgmgWeQhMmI4lsZ69SjBtSrmU"

const mapping: Record<string, string> = {
  'admin': tokenAdmin,
  'user': tokenUser,
  'unknown': tokenUnknown
}

const invalidCredError: ApiError = {code: 401, message: 'Invalid credentials'} as ApiError;

@Injectable()
export class AuthApiMock implements AuthApi {
  login(username: string, password: string): Observable<ApiResult<LoginResponse>> {

    const token = mapping[username.toLowerCase()] ?? undefined;
    if (token === undefined) {
      return of(invalidCredError).pipe(
        toApiResultError<LoginResponse>(),
        delay(300));
    } else {
      return of({token: token} satisfies LoginResponse).pipe(
        toApiResult(),
        delay(300));
    }
  }
}
