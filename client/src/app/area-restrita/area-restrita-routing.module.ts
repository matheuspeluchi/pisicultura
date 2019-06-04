import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaRestritaComponent } from './area-restrita/area-restrita.component';
import { GrupoListComponent } from './grupos/grupo-list/grupo-list.component';
import { IndexComponent } from './index/index.component';
import { GrupoListResolver } from './grupos/grupo-list/grupo-list.resolver';
import { GrupoViewComponent } from './grupos/grupo-view/grupo-view.component';
import { EmpresaListResolver } from './empresas/empresa-list/empresa-list.resolver';
import { EmpresaListComponent } from './empresas/empresa-list/empresa-list.component';

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
                component: EmpresaListComponent,
                resolve: {
                    empresas: EmpresaListResolver
                }
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
  exports: [RouterModule]
})
export class AreaRestritaRoutingModule { }
