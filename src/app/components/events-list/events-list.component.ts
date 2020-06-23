import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent {

    eventObj = {
        id: 1,
        name: 'Angular Connect',
        date: '26/09/2020',
        time: '10:00',
        price: 200.00,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data: any) {
        console.log('received:', data)
    }
}