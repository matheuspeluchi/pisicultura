import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';

const APIUrl = 'http://localhost:3000/pessoa/'
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private http: HttpClient,
    
    ) {
    this.http = http;
   }

  getPessoas() {
    return  this.http.get<Pessoa[]>(APIUrl);
  }
  getPessoabyId(id: string) {
    return  this.http.get<Pessoa>(APIUrl + id);
  }

  save(pessoa:Pessoa){
    if (pessoa._id){
      return this.update(pessoa)
    } else {
      return this.insert(pessoa)
    }
  }

  update(pessoa:Pessoa){
    return this.http.post<Pessoa>(APIUrl + pessoa._id,pessoa) 
  }

  insert(pessoa:Pessoa){
    return this.http.put<Pessoa>(APIUrl, pessoa)
  }
}
