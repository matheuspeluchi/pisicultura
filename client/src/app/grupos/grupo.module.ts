import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GrupoListComponent } from './grupo-list/grupo-list.component';
import { GrupoViewComponent } from './grupo-view/grupo-view.component';
import { AgGridComponent } from './../ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    GrupoListComponent,
    GrupoViewComponent,
    AgGridComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ]
})

export class GrupoModule { }
