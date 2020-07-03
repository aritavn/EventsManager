import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

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

@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        Error404Component,
        CreateEventComponent
    ],
    imports: [
        BrowserModule,
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
        EventListResolver
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}