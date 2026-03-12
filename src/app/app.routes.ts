import { Routes } from '@angular/router';
import { Contact } from '../pages/contact/contact';
import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';

export const routes: Routes = [
    {
    path:'',
    component: Home,
    },
    {
    path: 'contact',
    component: Contact,
    },
    {
    path: 'about',
    component: About,
    }
];
