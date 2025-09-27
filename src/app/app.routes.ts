import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Details} from './details/details';


import { LandPageComponent } from './land-page-component/land-page-component';
import { Pagina1Component } from './pagina1-component/pagina1-component';

export const routeConfig: Routes = [
    {path: '', component: Home, title:'Home'},
    {path:'land-page', component: LandPageComponent, title:'Land Page'},
    {path: 'pagina1-component', component: Pagina1Component, title:'Pagina 1'},
    {path: 'details/:id',    component: Details,    title: 'Home details',  },
];

export default routeConfig;