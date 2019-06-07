import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadeComponent } from './cidade.component';

@NgModule({
  declarations: [CidadeComponent],
  imports: [
    CommonModule,
  ],
  exports: [CidadeComponent]
  
})
export class CidadeModule { }
