import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
