import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarPipe } from './calendar.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CalendarComponent, CalendarPipe],
  exports: [CalendarComponent],
})
export class CalendarModule {}
