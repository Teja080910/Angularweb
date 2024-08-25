import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Personal } from './personal/personal';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signin', component: Login },
  { path: 'signup', component: Personal },
];
