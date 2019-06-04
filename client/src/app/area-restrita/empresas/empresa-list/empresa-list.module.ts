import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaListComponent } from './empresa-list.component';
import { ListaModule } from 'src/app/shared/components/lista/lista.module';

@NgModule({
  declarations: [EmpresaListComponent],
  imports: [
    CommonModule,
    ListaModule
  ]
})
export class EmpresaListModule { }
