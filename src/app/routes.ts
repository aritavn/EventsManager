import { Routes } from '@angular/router'
import { EventsListComponent } from './components/events-list/events-list.component'
import { EventDetailsComponent } from './components/event-details/event-details.component'
import { Error404Component } from './components/errors/error-404.component'
import { EventRouteActivator } from './services/event-route-activator.service'
import { CreateEventComponent } from './components/create-event/create-event.component'
import { EventListResolver } from './services/event-list-resolver.service'

export const AppRoutes: Routes = [
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    { 
        path: 'events', 
        component: EventsListComponent,
        resolve: { events: EventListResolver }
    },
    { 
        path: 'events/:id', 
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator]
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: () => import('./user.module').then(m => m.UserModule)
    }
]