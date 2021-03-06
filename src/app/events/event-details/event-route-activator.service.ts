import {CanActivate, ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot) {
        // tslint:disable-next-line: no-string-literal
        const eventExists = !!this.eventService.getEvent(+route.params['id']);
        // tslint:enable-next-line: no-string-literal

        if (!eventExists) {
        this.router.navigate(['/404']);
        return eventExists;
        }
        return true;

    }
}
