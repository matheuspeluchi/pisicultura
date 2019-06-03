import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';



@Injectable({providedIn: 'root' })
export class EmpresaListResolver implements Resolve<Observable<Empresa[]>>{

  constructor(private empresaService: EmpresaService){}

  resolve() {
    return this.empresaService.getList();
  }
}