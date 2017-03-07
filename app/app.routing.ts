import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';



const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },{
        path: 'search',
        component: SearchComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);