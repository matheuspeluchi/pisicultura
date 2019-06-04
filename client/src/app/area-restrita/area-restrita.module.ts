import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaRestritaComponent } from './area-restrita/area-restrita.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpresaModule } from './empresas/empresa.module';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GrupoListModule } from './grupos/grupo-list/grupo-list.module';
import { GrupoViewModule } from './grupos/grupo-view/grupo-view.module';
import { AreaRestritaRoutingModule } from './area-restrita-routing.module';

@NgModule({
  declarations: [AreaRestritaComponent, IndexComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EmpresaModule,
    GrupoListModule,
    GrupoViewModule,
    AreaRestritaRoutingModule,
    RouterModule  
    ],
  exports:[]
})
export class AreaRestritaModule { }
