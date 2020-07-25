import { Component, Input, OnChanges } from '@angular/core'
import { Session } from '../../models/session.model'

@Component({
    selector: 'sessions-list',
    templateUrl: './sessions-list.component.html'
})
export class SessionsListComponent implements OnChanges {

    @Input() sessions: Session[]
    @Input() filterBy: string
    @Input() sortBy: string
    visibleSessions: Session[] = []

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortBy === 'name'
                ? this.visibleSessions.sort((s1, s2) => s1.name.localeCompare(s2.name))
                : this.visibleSessions.sort((s1, s2) => s2.voters.length - s1.voters.length)
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
