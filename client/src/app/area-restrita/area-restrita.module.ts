import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaRestritaComponent } from './area-restrita/area-restrita.component';
import { EmpresaComponent } from './empresa/empresa.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpresaListComponent } from './empresa/empresa-list/empresa-list.component';
import { EmpresaListModule } from './empresa/empresa-list/empresa-list.module';

@NgModule({
  declarations: [AreaRestritaComponent, EmpresaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EmpresaListModule
  ],
  exports:[]
})
export class AreaRestritaModule { }
