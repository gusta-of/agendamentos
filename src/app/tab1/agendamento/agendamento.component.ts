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

  calendarOptions: Promise<CalendarOptions>;
  constructor() {
    setTimeout(() => {
      this.calendarOptions = this.data([]);
    });
  }
  ngOnInit(): void {}
  ngAfterContentInit(): void {}

  data(events: any[]): Promise<CalendarOptions> {
   return new Promise(resolve => {
      resolve({
        initialView: 'dayGridMonth',
        locale: ['pt'],
        dateClick: this.handleDateClick.bind(this),
        datesSet: this.datesSet.bind(this),
        plugins: [dayGridPlugin, interactionPlugin],
        showNonCurrentDates: false,
        contentHeight: 400,
        events: events,
        buttonText: {
          today: 'Hoje'
        }
      });
    });
  }

  handleDateClick(arg: any) {

    console.log(`date click! ${arg.date} ISOdate: ${arg.date.toISOString()}`)
    this.calendarOptions = this.data([{
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
