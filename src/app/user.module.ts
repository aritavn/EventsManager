import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { UserRoutes} from './user.routes'
import { ProfileComponent } from './components/profile/profile.component'

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes)
    ],
    providers: [
    ]
})
export class UserModule {}