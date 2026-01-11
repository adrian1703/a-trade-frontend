import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  writeCookie(key: string, value: string) {
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=/;`;
  }

  readCookie(key: string): string | null {
    const nameEQ = encodeURIComponent(key) + "=";
    const ca     = document.cookie.split(';');
    for (let c of ca) {
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  }

  writeLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  readLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  writeSessionStorage(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  readSessionStorage(key: string): string | null {
    return sessionStorage.getItem(key);
  }
}
