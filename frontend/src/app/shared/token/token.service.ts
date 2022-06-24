import { Injectable } from '@angular/core';
import { SessionManagerService } from '../session/session-manager.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private issuer = {
    login: 'http://127.0.0.1:8000/api/auth/login',
    register: 'http://127.0.0.1:8000/api/auth/register',
  };

  constructor(private sessionManager: SessionManagerService) {}

  handleData(token: any) {
    this.sessionManager.sessionSetKey('auth_token', token);
  }

  getToken() {
    return this.sessionManager.sessionFromKey('auth_token');
  }

  isValidToken() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1
          ? true
          : false;
      }
    } else {
      return false;
    }
  }

  payload(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  isLoggedIn() {
    return this.isValidToken();
  }

  removeToken() {
    sessionStorage.removeItem('auth_token');
  }
}
