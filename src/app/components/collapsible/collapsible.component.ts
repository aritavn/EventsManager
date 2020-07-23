import { Component } from '@angular/core'

@Component({
    selector: 'collapsible',
    templateUrl: 'collapsible.component.html'
})
export class CollapsibleComponent {

    visible: boolean = true

    toggleContent() {
        this.visible = !this.visible
    }
}