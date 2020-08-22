import { Injectable } from '@angular/core'
import { Session } from '../models/session.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class VoterService {

    constructor(private http: HttpClient) {}

    deleteVoter(eventId: number, session: Session, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName)

        const url = `api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.delete(url)
            .pipe(catchError(this.handleError('deleteVoter')))
            .subscribe()
    }

    addVoter(eventId: number, session: Session, voterName: string) {
        session.voters.push(voterName)

        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }
        const url = `api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.post(url, {}, options)
            .pipe(catchError(this.handleError('addVoter')))
            .subscribe()
    }

    userHasVoted(session: Session, voterName: string) {
        return session.voters.some(voter => voter === voterName)
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(operation)
            console.error(error)
            return of(result as T)
        }
    }
}