import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor() { }

  sessionFromKey(key: string){
    return JSON.parse(sessionStorage.getItem(key)!);
  }

  sessionSetKey(key: string, value: any){
    return sessionStorage.setItem(key, JSON.stringify(value));
  }
}
