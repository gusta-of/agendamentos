import { AfterContentInit, Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'agenda',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss'],
})
export class AgendamentoComponent implements OnInit, AfterContentInit {

  calendarOptions: CalendarOptions;
  constructor() { this.calendarOptions = this.data([]); }
  ngOnInit(): void {}
  ngAfterContentInit(): void {  }

  update(events: any) {
    this.calendarOptions = {...this.data(events)};
  }

  data(events: any[]): CalendarOptions {
   return {
      themeSystem: 'bootstrap5',
      initialView: 'dayGridMonth',
      locale: ['pt'],
      dateClick: this.handleDateClick.bind(this),
      datesSet: this.datesSet.bind(this),
      plugins: [dayGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'prev',
        center: 'title,today',
        right: 'next',
      },
      buttonText: {
        today: "hoje"
      },
      // showNonCurrentDates: false,
      contentHeight: 350,
      events: events,
      timeZone: 'local',
    };
  }

  handleDateClick(arg: any) {
    console.log(`date click! ${arg.date} ISOdate: ${arg.date.toISOString()}`)
    this.update([{
        start: arg.date.toLocaleDateString().split("/").reverse().join("-"),
        end: arg.date.toLocaleDateString().split("/").reverse().join("-"),
        display: 'background',
        backgroundColor: 'red',
      }]);
  }

  datesSet(args: any) {
    console.log(`Month: ${args.start.getMonth() + 1}`);
  }

}
