import {inject, Injectable} from '@angular/core';
import {AuthRole, AuthToken} from './model/auth-token.model';
import {StorageService} from '../storage/storage.service';
import {AUTH_API} from './api/auth.api';

const CookieKey = {
  AuthToken: 'AuthToken'
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  storageService = inject(StorageService);
  authApi = inject(AUTH_API)
  //HS256 ; javainuse-secret-key
  tokenAdmin: string   = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJVc2VybmFtZSI6IkFkcmlhbiIsImV4cCI6MTc2NzU0NDMzMywiaWF0IjoxNzY3NTQ0MzMzfQ.CGU_QEv2CvNbSJSBBOpgy7fRcb7PiQoR0Qgy8FVfyHI"
  tokenUser: string    = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVXNlciIsIlVzZXJuYW1lIjoiQWRyaWFuIiwiZXhwIjoxNzY3NTQyMjAyLCJpYXQiOjE3Njc1NDIyMDJ9.DFw14TIgyGfy1shxRi1f3TpJpvYqsBtsSG-pNVs0DEI"
  tokenUnknown: string = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVW5rbm93biIsIlVzZXJuYW1lIjoiQWRyaWFuIiwiZXhwIjoxNzY3NTQyMjAyLCJpYXQiOjE3Njc1NDIyMDJ9.d7A9iM8Fwnr4BRVZwIUgmgWeQhMmI4lsZ69SjBtSrmU"


  login(username: string, password: string) {
    //fetch jwt from backend
    //validate jwt
    //write jwt to cookie
    let observable       = this.authApi.login(username, password);
    observable.subscribe(res => {
      console.log(res)
    })
    const parsedUsername = username as AuthRole;
    switch (parsedUsername) {
      case AuthRole.Admin:
        this.writeAuthToken(this.tokenAdmin)
        break;
      case AuthRole.User:
        this.writeAuthToken(this.tokenUser)
        break;
      case AuthRole.Unknown:
        this.writeAuthToken(this.tokenUnknown)
        break;
      default:
        break
    }
  }

  logout() {
    this.writeAuthToken('')
  }

  isLoggedIn() {
    let authTokenString = this.readAuthToken() ?? "";
    return new AuthToken(authTokenString);
  }

  private readAuthToken() {
    return this.storageService.readCookie(CookieKey.AuthToken)!!;
  }

  private writeAuthToken(token: string) {
    this.storageService.writeCookie(CookieKey.AuthToken, token);
  }
}
