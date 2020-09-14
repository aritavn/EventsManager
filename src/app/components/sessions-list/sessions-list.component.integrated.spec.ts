import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { DebugElement } from '@angular/core'
import { SessionsListComponent } from './sessions-list.component'
import { AuthenticationService } from '../../services/authentication.service'
import { VoterService } from '../../services/voter.service'
import { UpvoteComponent } from '../upvote/upvote.component'
import { DurationPipe } from '../../utils/duration.pipe'
import { CollapsibleComponent } from '../collapsible/collapsible.component'

describe('SessionsListComponent', () => {
    let fixture: ComponentFixture<SessionsListComponent>
    let component: SessionsListComponent
    let element: HTMLElement
    let debugEl: DebugElement

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'Joe' }
        }
        let mockVoterService = {
            userHasVoted: () => true
        }

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionsListComponent,
                UpvoteComponent, 
                DurationPipe,
                CollapsibleComponent
            ],
            providers: [
                { provide: AuthenticationService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: []
        })
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionsListComponent)
        component = fixture.componentInstance
        debugEl = fixture.debugElement
        element = fixture.nativeElement
    })

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [
                { id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }
            ]
            component.filterBy = 'all'
            component.sortBy = 'name'
            component.eventId = 4

            component.ngOnChanges()
            fixture.detectChanges()

            expect(element.querySelector('[session-title]').textContent).toContain('Session 1')
        })
    })
})