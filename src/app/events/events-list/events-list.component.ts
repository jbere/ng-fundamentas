import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  template: `<h1>Upcoming Angular Events!</h1>
  <hr/>
  <div class='row'>
    <div class='col-md-5'  *ngFor='let event of events'>
    <app-event-thumbnail [event]='event' (eventClick)='handleEventClicked($event)'></app-event-thumbnail>
    </div>
  </div>
  `,
  styles: ['']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.events = this.route.snapshot.data['events'];

  }
  handleEventClicked(data) {
    console.log(data);

  }

}
