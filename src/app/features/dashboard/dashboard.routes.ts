import { Routes } from '@angular/router';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';
import { Home } from './pages/home/home';
import { authGuard } from '../../core/guards/auth/auth-guard';
import { Exams } from '../exams/pages/exams/exams';
import { AccountSettings } from '../settings/pages/account-settings/account-settings';

export const dashboardRoutes: Routes = [
  {
  path:'' , component: DashboardLayout , canActivate:[authGuard] ,
  children:[
         {path:'' , redirectTo:'home' , pathMatch:'full'},
         {path:'home' , component:Home , title:'Home'},
         {path:'exams' , component:Exams , title:'Exams'},
         {path:'account' , component:AccountSettings , title:'Account'}
     ]
  }
];
