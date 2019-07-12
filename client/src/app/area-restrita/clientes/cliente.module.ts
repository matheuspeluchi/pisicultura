import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ListaModule } from 'src/app/shared/components/lista/lista.module';
import { AcoesBarrasModule } from 'src/app/shared/components/acoes-barras/acoes-barras.module';

@NgModule({
  declarations: [ClienteComponent, ClienteFormComponent,ClienteListComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ListaModule,
    AcoesBarrasModule
  ]
})
export class ClienteModule { }
