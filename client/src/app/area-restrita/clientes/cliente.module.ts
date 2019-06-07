import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListModule } from './cliente-list/cliente-list.module';
import { ClienteComponent } from './cliente/cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClienteComponent ],
  imports: [
    CommonModule,
    ClienteListModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class ClienteModule { }
