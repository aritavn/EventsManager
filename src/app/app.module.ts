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

@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [
        EventService,
        ToastrService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }
