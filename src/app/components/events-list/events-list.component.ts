import { Component, OnInit } from '@angular/core'
import { ToastrService } from '../../services/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { Event } from '../../models/event.model' 

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

    events: Event[]

    constructor(private toastrService: ToastrService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }

    handleEventClicked(data: any) {
        console.log('received:', data)
    }

    handleThumbnailClick(eventName: string) {
        this.toastrService.success(eventName)
    }
}