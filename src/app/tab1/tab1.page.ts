import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  calendarOptions: CalendarOptions = {};
  constructor() {}

  ngOnInit(): void {
    this.calendarOptions = this.data();
  }

  data(): CalendarOptions {
    return {
      initialView: 'dayGridMonth',
      locale: ['pt'],
      dateClick: this.handleDateClick.bind(this),
      datesSet: this.drop.bind(this),
      plugins: [dayGridPlugin, interactionPlugin],
      showNonCurrentDates: false,
      contentHeight: 300,
      events: [
        {
          start: '2023-10-24',
          end: '2023-10-24',
          display: 'background',
          backgroundColor: 'red',
        },
      ],
      buttonText: {
        today: 'Hoje'
      }
    }
  }

  handleDateClick(arg: any) {
    console.log(`date click! ${arg.date} ISOdate: ${arg.date.toISOString()}`)
  }

  drop(args: any) {
    console.log(`Month: ${args.start.getMonth() + 1}`);
  }
}
