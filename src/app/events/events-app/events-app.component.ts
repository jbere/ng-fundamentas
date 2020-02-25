import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
<app-navbar></app-navbar>
<router-outlet></router-outlet>
  `,
  styleUrls: ['./events-app.component.css']
})
export class EventsAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
