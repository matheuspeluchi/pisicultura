import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GrupoListComponent } from './grupo-list/grupo-list.component';
import { GrupoViewComponent } from './grupo-view/grupo-view.component';

@NgModule({
  declarations: [
    GrupoListComponent,
    GrupoViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})

export class GrupoModule { }
