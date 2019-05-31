import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgFormModule } from '../msg-form/msg-form.module';
import { MsgFormComponent } from '../msg-form/msg-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinginComponent } from './singin.component';

@NgModule({
  declarations: [
    SinginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MsgFormModule
  ],
  exports: [
    SinginComponent
  ]
})
export class SinginModule { }
