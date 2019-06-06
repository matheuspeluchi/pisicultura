import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa';

@Injectable({providedIn: 'root' })
export class EmpresaListResolver implements Resolve<Observable<Empresa[]>>{

  constructor(private empresaService: EmpresaService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Empresa[]> {
    return this.empresaService.getEmpresas();
  }
}