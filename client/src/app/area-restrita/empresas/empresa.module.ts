import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListModule } from './empresa-list/empresa-list.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EmpresaComponent ],
  imports: [
    CommonModule,
    EmpresaListModule,
    RouterModule
  ]
})
export class EmpresaModule { }
