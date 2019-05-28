import { ListaModule } from './../lista/lista.module';
import { GrupoViewModule } from './grupo-view/grupo-view.module';
import { NgModule } from '@angular/core';
import { GrupoListModule } from './grupo-list/grupo-list.module';
import { ListaComponent } from '../lista/lista.component';

@NgModule({
  declarations: [ ],
  imports: [
    GrupoListModule,
    GrupoViewModule,
    ListaModule
  ]
})

export class GrupoModule { }
