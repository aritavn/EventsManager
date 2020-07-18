import { Component, Input } from '@angular/core'
import { Session } from '../../models/session.model'

@Component({
    selector: 'sessions-list',
    templateUrl: './sessions-list.component.html'
})
export class SessionsListComponent {

    @Input() sessions: Session[]
}