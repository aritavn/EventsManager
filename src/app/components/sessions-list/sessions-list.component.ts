import { Component, Input, OnChanges } from '@angular/core'
import { Session } from '../../models/session.model'

@Component({
    selector: 'sessions-list',
    templateUrl: './sessions-list.component.html'
})
export class SessionsListComponent implements OnChanges {

    @Input() sessions: Session[]
    @Input() filterBy: string
    visibleSessions: Session[] = []

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
        }
    }

    filterSessions(filter: string): void {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0)
        } else {
            this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filter)
        }
    }
}
