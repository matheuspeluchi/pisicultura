import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cliente } from './cliente';


const URL = 'http://localhost:3000/cliente';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: sessionStorage.getItem('Authorization')
  }),
  observe: 'body',
  responseType: 'json'
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private http: HttpClient) {
    this.http = http;
  }

  getClientes() {
    return this.http.get<Cliente[]>(URL);
  }

  save(cliente: Cliente) {
    console.log(cliente);
    return this.http.put<Cliente>(URL, cliente, httpOptions);
  }
}
