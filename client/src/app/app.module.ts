import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Minhas importações
import { PessoaModule } from './pessoas/pessoas.module';
import { ErrorsModule } from './errors/errors.module';
import { GrupoModule } from './grupos/grupo.module';
import { SinginModule } from './shared/components/singin/singin.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    GrupoModule,
    ErrorsModule,
    HomeModule,
    SinginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
