import { Component } from '@angular/core'
import { AuthenticationService } from '../../services/authentication.service'
import { EventService } from '../../services/event.service'

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {

    searchTerm: string = ''
    foundSessions: any[]

    constructor(public authService: AuthenticationService, private eventService: EventService) {}

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe((sessions: any[]) => {
            this.foundSessions = sessions
            console.log(this.foundSessions)
        })
    }
}
