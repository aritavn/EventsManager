import { Injectable } from '@angular/core'
import { User } from '../models/user.model'

@Injectable()
export class AuthenticationService {

    currentUser: User

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Smith'
        }
    }

    isAuthenticated() {
        return !!this.currentUser
    }
}