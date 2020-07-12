import { Component } from '@angular/core'
import { AuthenticationService } from '../../services/authentication.service'

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {

    constructor(public authService: AuthenticationService) {}
}