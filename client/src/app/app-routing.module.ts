import { PessoaFormComponent } from './pessoas/pessoa-form/pessoa-form/pessoa-form.component';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { GrupoListComponent } from './grupos/grupo-list/grupo-list.component';
import { GrupoListResolver } from './grupos/grupo-list/grupo-list.resolver';
import { GrupoViewComponent } from './grupos/grupo-view/grupo-view.component';
import { PessoaViewComponent } from './pessoas/pessoa-view/pessoa-view.component';
import { SinginComponent } from './home/singin/singin.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: SinginComponent
  },
  {
    path: 'pessoa/:id',
    component: PessoaFormComponent
  },
  {
    path: 'grupo/:id',
    component: GrupoViewComponent
  },
  {
    path: 'grupos',
    component: GrupoListComponent,
    resolve: {
      lista: GrupoListResolver
    }
  }
    ,
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
