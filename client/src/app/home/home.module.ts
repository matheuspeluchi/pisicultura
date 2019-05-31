import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MsgFormModule } from './../shared/components/msg-form/msg-form.module';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ 
    HomeComponent,
    MainMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MsgFormModule,
    RouterModule,
    FormsModule,
  
  ],
  exports: [
    HomeComponent,
    MainMenuComponent,
    FooterComponent
  ]
})
export class HomeModule { }
