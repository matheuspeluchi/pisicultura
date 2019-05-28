import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaModule } from './../../lista/lista.module';
import { GrupoListComponent } from './grupo-list.component';

@NgModule({
  declarations: [GrupoListComponent],
  imports: [
    CommonModule,
    ListaModule
  ]
})
export class GrupoListModule { }
