import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './components/events-list/events-list.component'
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component'
import { NavBarComponent } from './components/navbar/navbar.component'
import { EventService } from './services/event.service'
import { TOASTR_TOKEN, Toastr } from './services/toastr.service'
import { EventDetailsComponent } from './components/event-details/event-details.component'
import { AppRoutes } from './routes'
import { Error404Component } from './components/errors/error-404.component'
import { EventRouteActivator } from './services/event-route-activator.service'
import { CreateEventComponent } from './components/create-event/create-event.component'
import { EventListResolver } from './services/event-list-resolver.service'
import { AuthenticationService } from './services/authentication.service'
import { CreateSessionComponent } from './components/create-session/create-session.component'
import { SessionsListComponent } from './components/sessions-list/sessions-list.component'
import { CollapsibleComponent } from './components/collapsible/collapsible.component'
import { DurationPipe } from './utils/duration.pipe'
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component'
import { UpvoteComponent } from './components/upvote/upvote.component'
import { VoterService } from './services/voter.service'

let toastr: Toastr = window['toastr']

@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        Error404Component,
        CreateEventComponent,
        CreateSessionComponent,
        SessionsListComponent,
        CollapsibleComponent,
        SimpleModalComponent,
        UpvoteComponent,
        DurationPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolver,
        AuthenticationService,
        VoterService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}