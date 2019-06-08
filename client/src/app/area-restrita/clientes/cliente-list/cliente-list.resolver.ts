import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Injectable({providedIn: 'root' })
export class ClienteListResolver implements Resolve<Observable<Cliente[]>>{

  constructor(private clienteService: ClienteService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente[]> {
    return this.clienteService.getClientes();
  }
}