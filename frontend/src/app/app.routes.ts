import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Personal } from './personal/personal';


export const routes: Routes = [
    {path:'',component:Home},
    {path:'signup',component:Personal}
];
