import { Injectable } from '@angular/core'
import { User } from '../models/user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap, catchError } from 'rxjs/operators'
import { of, Observable } from 'rxjs'

@Injectable()
export class AuthenticationService {

    currentUser: User

    constructor(private http: HttpClient) {}

    loginUser(userName: string, password: string): Observable<any> {
        let loginInfo = {
            username: userName,
            password: password
        }
        let options = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        }

        return this.http.post('/api/login/', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <User> data['user']
            }))
            .pipe(catchError(err => {
                return of(false)
            }))
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    checkAuthenticationStatus(): Observable<any> {
        return this.http.get('/api/currentIdentity')
            .pipe(tap(data => {
                if (data instanceof Object) {
                    this.currentUser = <User> data
                }
            }))
    }

    updateCurrentUser(firstName: string, lastName: string): Observable<any> {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName

        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }

        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options)
    }

    logout(): Observable<any> {
        this.currentUser = undefined

        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

        return this.http.post('/api/logout', {}, options)
    }
}