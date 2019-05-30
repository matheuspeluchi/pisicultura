import { MsgFormModule } from './../shared/components/msg-form/msg-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaViewComponent } from './pessoa-view/pessoa-view.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form/pessoa-form.component';


@NgModule({
  declarations: [
    PessoaComponent,
    PessoaViewComponent,
    PessoaFormComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MsgFormModule,
    FormsModule
  ]
})

export class PessoaModule {}
