import { GrupoListResolver } from './grupos/grupo-list/grupo-list.resolver';
import { GrupoViewComponent } from './grupos/grupo-view/grupo-view.component';
import { PessoaViewComponent } from './pessoas/pessoa-view/pessoa-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { GrupoListComponent } from './grupos/grupo-list/grupo-list.component';

const routes: Routes = [
  {path: 'pessoa/:id', component: PessoaViewComponent},
  {path: 'grupo/:id', component: GrupoViewComponent},
  {
    path: 'grupos',
    component: GrupoListComponent,
    resolve: {
      grupos: GrupoListResolver
    }
  }
    ,
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
