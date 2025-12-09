import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { Home } from '../home/home';
import { Setting } from '../setting/setting';
import { Profile } from '../profile/profile';
import { About } from '../about/about';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'setting',
        component: Setting
    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'about',
        component: About
    }
];
