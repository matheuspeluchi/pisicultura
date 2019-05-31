import { PessoaFormComponent } from './pessoas/pessoa-form/pessoa-form/pessoa-form.component';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { GrupoListComponent } from './grupos/grupo-list/grupo-list.component';
import { GrupoListResolver } from './grupos/grupo-list/grupo-list.resolver';
import { GrupoViewComponent } from './grupos/grupo-view/grupo-view.component';import { PessoaViewComponent } from './pessoas/pessoa-view/pessoa-view.component';
import { SinginComponent } from './shared/components/singin/singin.component';
import { HomeComponent } from './home/home/home.component';
import { HomeGuardService } from './home/home-guard.service';
import { AreaRestritaComponent } from './area-restrita/area-restrita/area-restrita.component';
import { resolve } from 'q';
import { EmpresaListResolver } from './area-restrita/empresa/empresa-list/empresa-list.resolver';


const routes: Routes = [
  {
    path: 'login',
    component: SinginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate:[HomeGuardService],
    children: [
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
      },
      {
        path: 'areaRestrita',
        component: AreaRestritaComponent,
        resolve: {
          lista: EmpresaListResolver
        }
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
