import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaViewComponent } from './pessoa-view/pessoa-view.component';

@NgModule({
  declarations: [
    PessoaComponent,
    PessoaViewComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})

export class PessoasModule {}
