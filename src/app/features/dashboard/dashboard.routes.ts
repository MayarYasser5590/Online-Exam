import { Routes } from '@angular/router';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';
import { Home } from './pages/home/home';
import { authGuard } from '../../core/guards/auth/auth-guard';

export const dashboardRoutes: Routes = [
  {
  path:'' , component: DashboardLayout , canActivate:[authGuard] ,
  children:[
         {path:'' , redirectTo:'home' , pathMatch:'full'},
         {path:'home' , component:Home , title:'Home'},
         {path:'account' , loadComponent:()=>import('../settings/pages/account-settings/account-settings').then((c)=> c.AccountSettings) , title:'Account'},
         {path:'exams' , loadComponent:()=>import('../exams/pages/exams/exams').then((c)=> c.Exams) , title:'Exams'}

     ]
  }
];
