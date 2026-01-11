import {TestBed} from '@angular/core/testing';

import {StorageService} from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);

    // Clean up before each test
    localStorage.clear();
    sessionStorage.clear();

    // Clear cookies for testing cookie functions
    document.cookie.split(";").forEach(cookie => {
      const eqPos     = cookie.indexOf("=");
      const name      = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Cookie Operations', () => {
    it('should return null for non-existent cookie', () => {
    });
    expect(service.readCookie('test1')).toBeNull();

    it('should write and read a cookie value', () => {
      service.writeCookie('test2', 'testValue');
      expect(service.readCookie('test2')).toBe('testValue');
    });
  });

  describe('LocalStorage Operations', () => {
    it('should write and read localStorage value', () => {
      service.writeLocalStorage('localKey', 'localValue');
      expect(service.readLocalStorage('localKey')).toBe('localValue');
    });

    it('should return null for non-existent localStorage key', () => {
      expect(service.readLocalStorage('noLocalKey')).toBeNull();
    });
  });

  describe('SessionStorage Operations', () => {
    it('should write and read sessionStorage value', () => {
      service.writeSessionStorage('sessionKey', 'sessionValue');
      expect(service.readSessionStorage('sessionKey')).toBe('sessionValue');
    });

    it('should return null for non-existent sessionStorage key', () => {
      expect(service.readSessionStorage('noSessionKey')).toBeNull();
    });
  });
});
