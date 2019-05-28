import { GrupoViewComponent } from './grupo-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoListComponent } from '../grupo-list/grupo-list.component';

@NgModule({
  declarations: [GrupoViewComponent],
  imports: [
    CommonModule
  ]
})
export class GrupoViewModule { }
