import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Details} from './details/details';


import { LandPageComponent } from './land-page-component/land-page-component';
import { Pagina1Component } from './pagina1-component/pagina1-component';
import { Pagina2Component } from './pagina2-component/pagina2-component';
import { Pagina3Component } from './pagina3-component/pagina3-component';
import { Pagina4Component } from './pagina4-component/pagina4-component';
import { ChatbotComponent } from './chatbot-component/chatbot-component';

export const routeConfig: Routes = [
    {path: '', component: Home, title:'Home'},
    {path:'land-page', component: LandPageComponent, title:'Land Page'},
    {path: 'chatbot-component', component: ChatbotComponent, title:'ChatBot'},
    {path: 'pagina1-component', component: Pagina1Component, title:'Pagina 1'},
    {path: 'pagina2-component', component: Pagina2Component, title:'Pagina 2'},
    {path: 'pagina3-component', component: Pagina3Component, title:'Pagina 3'},
    {path: 'pagina4-component', component: Pagina4Component, title:'Pagina 4'},
    {path: 'details/:id',    component: Details,    title: 'Home details',  },
];

export default routeConfig;