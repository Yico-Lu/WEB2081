import { Routes } from '@angular/router';
import { Contact } from '../pages/contact/contact';
import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';
import { Products } from '../pages/products/products';
import { ProductDetail } from '../pages/product-detail/product-detail';

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
    },
    {
    path: 'products',
    component: Products,
    },
    {
    path: 'product-detail',
    component: ProductDetail,
    },
];
