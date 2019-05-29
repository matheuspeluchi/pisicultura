import { Injectable } from '@angular/core';

const Chave = 'Authorization';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken() {
    return !!this.getToken();
  }

  setToken(token) {
    sessionStorage.setItem(Chave, token);
  }

  getToken() {
    return sessionStorage.getItem(Chave);
  }

  removeToken(){
    sessionStorage.removeItem(Chave);
  }
}
