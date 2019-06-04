import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { GrupoService } from '../grupo.service';
import { Grupo } from '../grupo';

@Injectable({providedIn: 'root' })
export class GrupoListResolver implements Resolve<Observable<Grupo[]>>{

  constructor(private grupoSerivce: GrupoService){}

  resolve() {
    return this.grupoSerivce.getGrupos();
  }
}
