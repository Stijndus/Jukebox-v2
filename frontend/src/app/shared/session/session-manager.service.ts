import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor() { }

  sessionFromKey(key: string) {
    return sessionStorage.getItem(key);
  }

  sessionSetKey(key: string, value: any) {
    return sessionStorage.setItem(key, value);
  }

  localFromKey(key: string) {
    return localStorage.getItem(key)
  }

  localSetKey(key: string, value: any) {
    return localStorage.setItem(key, value);
  }
}
