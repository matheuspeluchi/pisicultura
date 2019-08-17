import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Minhas importações
import { PessoaModule } from './pessoas/pessoas.module';
import { ErrorsModule } from './errors/errors.module';
import { SinginModule } from './shared/components/singin/singin.module';
import { CidadeModule } from './shared/components/cidades/cidade/cidade.module';
import { getAuthServiceConfigs } from './core/auth/socialLoginConfig';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    PessoaModule,
    ErrorsModule,
    HomeModule,
    CidadeModule,
    SinginModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
