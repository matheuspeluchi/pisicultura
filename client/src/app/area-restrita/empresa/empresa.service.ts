import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from './empresa';


const API_URL = 'http://localhost:3000/empresa'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { 
    this.http = http;
  }

  getList(){
    return this.http.get<Empresa[]>(API_URL);
  }
}
