import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Event } from '../../models/event.model' 

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {

    @Input() event: Event
    @Output() eventClick = new EventEmitter()

    handleClick() {
        this.eventClick.emit(this.event.name)
    }

    getStartTimeClass() {
        if (this.event && this.event.time ==='8:00 am')
            return 'green bold'
        return ''
    }
}