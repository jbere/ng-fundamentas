import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsAppComponent } from './events/events-app/events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Page404Component } from './errors/page404/page404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list/event-list-resolver.service';
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsAppComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Page404Component
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
 if (component.isDirty) {
  return window.confirm('You have not saved this event, do you really want to cancel?');
 }
 return true;

}
