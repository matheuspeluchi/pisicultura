import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from './empresa';
import { Observable } from 'rxjs';


const URL = 'http://localhost:3000/empresa'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { 
    this.http = http;
  }

  getEmpresas(){
    return this.http.get<Empresa[]>(URL);
  }
}
