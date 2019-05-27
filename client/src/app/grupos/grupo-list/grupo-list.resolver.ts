import { GrupoService } from './../grupo.service';
import { Grupo } from './../grupo';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root' })
export class GrupoListResolver implements Resolve<Observable<Grupo[]>>{

  constructor(private grupoSerivce: GrupoService){}

  resolve(){
    return this.grupoSerivce.getGrupos();
  }
}
