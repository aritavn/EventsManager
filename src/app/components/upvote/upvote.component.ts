import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'upvote',
    templateUrl: 'upvote.component.html'
})
export class UpvoteComponent {

    @Input() count: number
    @Input() voted: boolean
    @Output() vote = new EventEmitter()

    onClick() {
        this.vote.emit({})
    }
}