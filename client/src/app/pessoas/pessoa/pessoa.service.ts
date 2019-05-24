import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) {
    this.http = http;
   }

  getPessoas() {
    return  this.http.get<Pessoa[]>('http://localhost:3000/pessoa/');
  }
  getPessoabyId(id: string) {
    return  this.http.get<Pessoa>('http://localhost:3000/pessoa/' + id);
  }
}
