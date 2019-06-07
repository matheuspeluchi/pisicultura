import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaRestritaComponent } from './area-restrita/area-restrita.component';
import { GrupoListComponent } from './grupos/grupo-list/grupo-list.component';
import { IndexComponent } from './index/index.component';
import { GrupoListResolver } from './grupos/grupo-list/grupo-list.resolver';
import { GrupoViewComponent } from './grupos/grupo-view/grupo-view.component';
import { ClienteListResolver } from './clientes/cliente-list/cliente-list.resolver';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClienteComponent } from './clientes/cliente/cliente.component';

const routes: Routes = [
    {
        path: '',
        component: AreaRestritaComponent,
        children:[
            {
                path:'',
                component: IndexComponent,
            },
            {
                path:'empresa',
                component: ClienteListComponent,
                resolve: {
                    empresas: ClienteListResolver
                }
            },
            {
                path:'empresa/novo',
                component:ClienteComponent
            },
            {
                path: 'grupo/:id',
                component: GrupoViewComponent,
            },
            {                    
                path: 'grupos',
                component: GrupoListComponent,
                resolve: {
                    grupos: GrupoListResolver
                }
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class AreaRestritaRoutingModule { }
