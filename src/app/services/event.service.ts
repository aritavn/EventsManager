import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Event } from '../models/event.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { Session } from '../models/session.model'

@Injectable()
export class EventService {

    constructor(private http: HttpClient) {}

    getEvents(): Observable<Event[]> {
        return this.http.get<Event[]>('/api/events')
            .pipe(catchError(this.handleError<Event[]>('getEvents', [])))
    }

    getEvent(id: number): Observable<Event> {
        return this.http.get<Event>('/api/events/' + id)
            .pipe(catchError(this.handleError<Event>('getEvent')))
    }

    saveEvent(event: Event): Observable<Event> {
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }
        return this.http.post<Event>('/api/events', event, options)
            .pipe(catchError(this.handleError<Event>('saveEvent')))
    }

    searchSessions(searchTerm: string): Observable<Session[]> {
        return this.http.get<Session[]>('/api/sessions/search?search=' + searchTerm)
            .pipe(catchError(this.handleError<Session[]>('searchSessions')))
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(operation)
            console.error(error)
            return of(result as T)
        }
    }
}
