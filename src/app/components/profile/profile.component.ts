import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from '../../services/authentication.service'
import { Router } from '@angular/router'
import { TOASTR_TOKEN, Toastr } from '../../services/toastr.service'

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup
    private firstName: FormControl
    private lastName: FormControl

    constructor(private authService: AuthenticationService, private router: Router, 
        @Inject(TOASTR_TOKEN) private toastr: Toastr) {}
    
    ngOnInit() {
        this.firstName = new FormControl(this.authService.currentUser.firstName, 
            [Validators.required, Validators.pattern('[a-zA-Z].*')])
        this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    saveProfile(formValues: any): void {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
                this.toastr.success('Profile Saved')
            })
        }
    }

    logout(): void {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/user/login'])
        })
    }

    validateFirstName(): boolean {
        return this.firstName.valid || this.firstName.untouched
    }

    validateLastName(): boolean {
        return this.lastName.valid || this.lastName.untouched
    }

    cancel() {
        this.router.navigate(['events'])
    }
}