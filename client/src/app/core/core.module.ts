import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainMenuComponent]
})
export class CoreModule { }
