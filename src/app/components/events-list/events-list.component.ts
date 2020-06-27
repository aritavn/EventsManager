import { Component, OnInit } from '@angular/core'
import { EventService } from '../../services/event.service'
import { ToastrService } from '../../services/toastr.service'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

    events: any[]

    constructor(private eventService: EventService, private toastrService: ToastrService) {}

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }

    handleEventClicked(data: any) {
        console.log('received:', data)
    }

    handleThumbnailClick(eventName: string) {
        this.toastrService.success(eventName)
    }
}