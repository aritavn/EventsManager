import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';

export const UserRoutes = [
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]