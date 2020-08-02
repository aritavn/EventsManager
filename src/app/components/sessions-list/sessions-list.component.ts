import { Component, Input, OnChanges } from '@angular/core'
import { Session } from '../../models/session.model'
import { AuthenticationService } from '../../services/authentication.service'
import { VoterService } from '../../services/voter.service'

@Component({
    selector: 'sessions-list',
    templateUrl: './sessions-list.component.html'
})
export class SessionsListComponent implements OnChanges {

    @Input() sessions: Session[]
    @Input() filterBy: string
    @Input() sortBy: string
    visibleSessions: Session[] = []

    constructor(public authService: AuthenticationService, private voterService: VoterService) {}

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

    toggleVote(session: Session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.authService.currentUser.userName)
        } else {
            this.voterService.addVoter(session, this.authService.currentUser.userName)
        }

        if (this.sortBy === 'votes') {
            this.visibleSessions.sort((s1, s2) => s2.voters.length - s1.voters.length)
        }
    }

    userHasVoted(session: Session) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName)
    }
}
