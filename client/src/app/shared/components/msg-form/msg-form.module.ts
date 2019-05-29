import { MsgFormComponent } from './msg-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MsgFormComponent],
  imports: [
    CommonModule
  ],
  exports: [MsgFormComponent]
})
export class MsgFormModule { }
