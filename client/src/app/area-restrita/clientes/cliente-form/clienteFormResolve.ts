import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CidadeService } from 'src/app/shared/components/cidades/cidade.service';
@Injectable({
  providedIn: 'root'
})
export class ClienteFormResolve implements Resolve<Observable<[]>> {


  constructor(
    private cidadeService: CidadeService
  ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      return this.cidadeService.getCidades();

    }
}
