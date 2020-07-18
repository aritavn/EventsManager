import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Session } from '../../models/session.model'

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()
    name: FormControl
    presenter:  FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl
    newSessionForm: FormGroup

    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }
 
    saveSession(formValues: any): void {
        let session: Session = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        this.saveNewSession.emit(session)
    }

    cancel() {
        this.cancelAddSession.emit()
    }
}
