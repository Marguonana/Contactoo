import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { MatDialog} from '@angular/material';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import * as moment from "moment";
import { AppointmentModalComponent } from '@src/app/appointment-modal/appointment-modal.component';
@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})

export class RendezVousComponent implements OnInit {
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  locales = [frLocale];
  calendarEvents: EventInput[] = [
    { title: 'Visite', start: new Date() }
  ];

  @ViewChild("calendar",null) calendarComponent: FullCalendarComponent; // the #calendar in the template
  
  constructor(public dialog: MatDialog){}

  ngOnInit(): void {

  }

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2019-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    if (arg && arg.date.toString().includes('00:00:00')){
      let calendarApi = this.calendarComponent.getApi();
      calendarApi.gotoDate(arg.dateStr);
      calendarApi.changeView('timeGridDay');
    }
    else {
      const confirmRef = this.dialog.open(AppointmentModalComponent, {
        width: '500px',
        data: {formattedDate:  moment(arg.dateStr).format('DD/MM/YYYY HH:mm')},
        autoFocus: false
      });
      confirmRef.afterClosed().subscribe( choix => {
        switch(choix) {
          case 'rdv':
            console.log('rdv choisi');
            this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
              title: 'RDV',
              start: arg.date,
              allDay: arg.allDay
            })
            break;
          case 'visite':
            console.log('visite');
            this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
              title: 'Visite',
              start: arg.date,
              allDay: arg.allDay
            })
            break;
          default: 
            console.log('annulation');
            break;
        }
      });
    }
  }

}
