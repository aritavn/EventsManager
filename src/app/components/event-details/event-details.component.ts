import { Component, OnInit } from '@angular/core'
import { EventService } from '../../services/event.service'
import { ActivatedRoute, Params } from '@angular/router'
import { Event } from '../../models/event.model' 
import { Session } from '../../models/session.model'

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

    event: Event
    addMode: boolean
    filterBy: string = 'all'
    sortBy: string = 'votes'

    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id'])
            this.addMode = false
            this.filterBy = 'all'
            this.sortBy = 'votes'
        })
    }

    addSession() {
        this.addMode = true
    }

    saveNewSession(session: Session) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1
        session.id = nextId
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelAddSession() {
        this.addMode = false
    }
}