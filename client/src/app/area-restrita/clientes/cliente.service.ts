import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';


const URL = 'http://localhost:3000/empresa'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { 
    this.http = http;
  }

  getEmpresas(){
    return this.http.get<Cliente[]>(URL);
  }
}
