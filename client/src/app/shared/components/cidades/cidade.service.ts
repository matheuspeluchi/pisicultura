import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from './cidade';

const API_URL = "http://localhost:3000/cidade"

@Injectable({
  providedIn: 'root'
})

export class CidadeService {

  constructor(
    private http: HttpClient
  ) { 
    this.http = http;
  }

  getCidades(){
    return this.http.get<Cidade[]>(API_URL);
  }

}
