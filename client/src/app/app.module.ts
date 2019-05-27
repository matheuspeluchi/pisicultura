import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Minhas importações
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PessoaModule } from './pessoas/pessoas.module';
import { ErrorsModule } from './errors/errors.module';
import { GrupoModule } from './grupos/grupo.module';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    GrupoModule,
    ErrorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
