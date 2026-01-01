import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ForgetPasswordLayout } from './layouts/forget-password-layout/forget-password-layout';
import { logedGuard } from '../../core/guards/loged/loged-guard';


export const authRoutes: Routes = [
     {path:'' , component:AuthLayout ,
  children:[
         {path:'' , redirectTo:'login' , pathMatch:'full'},
         {path:'login' , loadComponent:()=>import('../auth/pages/login/login').then((c)=>c.Login) , canActivate:[logedGuard] , title:'Login'},
         {path:'register' , loadComponent:()=>import('../auth/pages/register/register').then((c)=>c.Register) , canActivate:[logedGuard] ,title:'Register'},
         {path:'forgetPasswordLayout', loadComponent:()=>import('../auth/layouts/forget-password-layout/forget-password-layout').then((c)=>c.ForgetPasswordLayout) , title:'Forget Password'},

     ]}
];
