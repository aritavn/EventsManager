import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './components/events-list/events-list.component'
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component'
import { NavBarComponent } from './components/navbar/navbar.component'
import { EventService } from './services/event.service'
import { ToastrService } from './services/toastr.service'
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
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolver,
        AuthenticationService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}