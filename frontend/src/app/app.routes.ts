import { Routes } from '@angular/router';
import { SignUp } from './register/register';
import { Home } from './home/home';


export const routes: Routes = [
    {path:'',component:Home},
    {path:'signup',component:SignUp}
];
