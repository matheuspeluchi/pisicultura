import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Grupo } from './grupo';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) {
    this.http = http;
   }

   getGrupos() {
     return this.http.get<Grupo[]>(url + '/grupo');
   }

   getGrupo(id: string) {
     return this.http.get<Grupo>(url + '/grupo/' + id);
   }

   save(grupo: Grupo) {
     const novo: boolean = grupo.id = null;
     return (novo ? this.http.put : this.http.post)<Grupo>(url + '/grupo/' + grupo.id, grupo );
   }


}
