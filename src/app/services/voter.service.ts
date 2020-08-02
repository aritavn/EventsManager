import { Injectable } from '@angular/core'
import { Session } from '../models/session.model'

@Injectable()
export class VoterService {

    deleteVoter(session: Session, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName)
    }

    addVoter(session: Session, voterName: string) {
        session.voters.push(voterName)
    }

    userHasVoted(session: Session, voterName: string) {
        return session.voters.some(voter => voter === voterName)
    }
}