import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CalendarModule } from '../calendar/calendar.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { TreeModule } from '../tree/tree.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SidenavModule,
    TreeModule
  ]
})
export class MainModule { }
