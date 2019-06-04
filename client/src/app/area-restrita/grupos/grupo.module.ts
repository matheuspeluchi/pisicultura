import { GrupoViewModule } from './grupo-view/grupo-view.module';
import { NgModule } from '@angular/core';
import { GrupoListModule } from './grupo-list/grupo-list.module';


@NgModule({
  declarations: [ ],
  imports: [
    GrupoListModule,
    GrupoViewModule
  ]
})

export class GrupoModule { }
