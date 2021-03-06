import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';
import { CalendarModule } from '../calendar/calendar.module';
import { NotesComponent } from '../notes/notes.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'calendar', component: CalendarComponent },
      { path: 'notes', loadChildren: () => import('../notes/notes.module').then(m => m.NotesModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
