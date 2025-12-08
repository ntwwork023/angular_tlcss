import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Setting } from './setting/setting';
import { Home } from './home/home';
import { Pdashboard } from './pdashboard/pdashboard';

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
        path: 'performance',
        component: Pdashboard
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
