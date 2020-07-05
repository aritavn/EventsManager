import { Component } from '@angular/core'

@Component({
    template: `
        <div class='m-4'>
            <h1>404 error</h1>
            <p>Could not find resource</p>
        </div>
    `
})
export class Error404Component {
    constructor() {}
}