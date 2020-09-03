import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from './services/authentication.service'

@Component({
    selector: 'events-app',
    templateUrl: './events-app.component.html'
})
export class EventsAppComponent implements OnInit {
    
    constructor(private authService: AuthenticationService) {}

    ngOnInit() {
        this.authService.checkAuthenticationStatus().subscribe()
    }
}
