import { GrupoService } from './grupo.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GrupoService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[GrupoService]
})
export class GrupoModule { }
