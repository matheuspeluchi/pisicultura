import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AreaRestritaComponent } from './area-restrita/area-restrita.component';
import { ClienteModule } from './clientes/cliente.module';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GrupoListModule } from './grupos/grupo-list/grupo-list.module';
import { GrupoViewModule } from './grupos/grupo-view/grupo-view.module';
import { AreaRestritaRoutingModule } from './area-restrita-routing.module';
import { MsgFormModule } from '../shared/components/msg-form/msg-form.module';
import { AcoesBarrasModule } from '../shared/components/acoes-barras/acoes-barras.module';

@NgModule({
  declarations: [AreaRestritaComponent, IndexComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MsgFormModule,
    ClienteModule,
    GrupoListModule,
    GrupoViewModule,
    AcoesBarrasModule,
    AreaRestritaRoutingModule,
    RouterModule  ,
    ],
  exports:[]
})
export class AreaRestritaModule { }
