import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  //HS256 ; javainuse-secret-key
  tokenAdmin: string   = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJVc2VybmFtZSI6IkFkcmlhbiIsImV4cCI6MTc2NzU0NDMzMywiaWF0IjoxNzY3NTQ0MzMzfQ.CGU_QEv2CvNbSJSBBOpgy7fRcb7PiQoR0Qgy8FVfyHI"
  tokenUser: string    = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVXNlciIsIlVzZXJuYW1lIjoiQWRyaWFuIiwiZXhwIjoxNzY3NTQyMjAyLCJpYXQiOjE3Njc1NDIyMDJ9.DFw14TIgyGfy1shxRi1f3TpJpvYqsBtsSG-pNVs0DEI"
  tokenUnknown: string = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVW5rbm93biIsIlVzZXJuYW1lIjoiQWRyaWFuIiwiZXhwIjoxNzY3NTQyMjAyLCJpYXQiOjE3Njc1NDIyMDJ9.d7A9iM8Fwnr4BRVZwIUgmgWeQhMmI4lsZ69SjBtSrmU"


  login(username: string, password: string) {
  }


}
