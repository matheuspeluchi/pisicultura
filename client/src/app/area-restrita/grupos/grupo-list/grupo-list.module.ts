import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoListComponent } from './grupo-list.component';
import { ListaModule } from 'src/app/shared/components/lista/lista.module';

@NgModule({
  declarations: [GrupoListComponent],
  imports: [
    CommonModule,
    ListaModule
  ]
})
export class GrupoListModule { }
