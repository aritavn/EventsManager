import { Component, OnInit } from '@angular/core'
import { EventService } from '../../services/event.service'
import { ActivatedRoute } from '@angular/router'
import { Event } from '../../models/event.model' 

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

    event: Event

    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}