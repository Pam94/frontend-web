import { LoginState } from './login/login.reducer';
import { Activity } from './shared/models/Activity';
import { User } from './shared/models/User';

export interface AppState {
    loginState: LoginState,
    users: User[],
    activities: Activity[]
}