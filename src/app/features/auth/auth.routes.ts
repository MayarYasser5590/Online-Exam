import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ForgetPasswordLayout } from './layouts/forget-password-layout/forget-password-layout';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';


export const authRoutes: Routes = [
     {path:'' , component:AuthLayout ,     providers: [
      provideHttpClient(withInterceptors([authInterceptor]))
    ],
  children:[
         {path:'' , redirectTo:'login' , pathMatch:'full'},
         {path:'login' , component:Login , title:'Login'},
         {path:'register' , component:Register , title:'Register'},
         {path:'forgetPasswordLayout',component:ForgetPasswordLayout , title:'Forget Password'},

     ]}
];
