import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteListComponent } from './cliente-list.component';
import { ListaModule } from 'src/app/shared/components/lista/lista.module';

@NgModule({
  declarations: [ClienteListComponent],
  imports: [
    CommonModule,
    ListaModule
  ]
})
export class ClienteListModule { }
