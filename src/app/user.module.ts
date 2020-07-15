import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserRoutes} from './user.routes'
import { ProfileComponent } from './components/profile/profile.component'
import { LoginComponent } from './components/login/login.component'

@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(UserRoutes)
    ],
    providers: [
    ]
})
export class UserModule {}