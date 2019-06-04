import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GrupoViewComponent } from './grupo-view.component';

@NgModule({
  declarations: [GrupoViewComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GrupoViewModule { }
