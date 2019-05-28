import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaComponent } from './lista.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [ ListaComponent ],
  imports: [ CommonModule, AgGridModule.withComponents([]) ],
  exports: [ ListaComponent ]
})
export class ListaModule { }
