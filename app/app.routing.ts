import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {LoginComponent} from './components/Login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {ProtectedComponent} from './components/protected/protected.component';
import {SignUpComponent} from './components/signup/signup.component';

import { AuthGuard } from './services/auth.guard'

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },{
        path: 'search',
        component: SearchComponent
    },{
        path: '',
        component: LoginComponent
    },{
        path: 'logout',
        component: LogoutComponent
    },{
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [AuthGuard]
    },{
        path: 'signup',
        component: SignUpComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);