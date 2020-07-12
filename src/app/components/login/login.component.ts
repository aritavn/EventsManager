import { Component } from '@angular/core'
import { AuthenticationService } from '../../services/authentication.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {

    userName: string
    password: string
    mouseoverLogin: boolean

    constructor(private authService: AuthenticationService, private router: Router) {}

    login(formValues: any) {
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
}