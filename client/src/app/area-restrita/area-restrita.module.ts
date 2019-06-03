import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaRestritaComponent } from './area-restrita/area-restrita.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpresaModule } from './empresas/empresa.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AreaRestritaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EmpresaModule,
    RouterModule  
    ],
  exports:[]
})
export class AreaRestritaModule { }
