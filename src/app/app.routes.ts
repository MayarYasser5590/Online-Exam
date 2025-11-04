import { Routes } from '@angular/router';
import { AuthLayout } from './core/layout/auth-layout/auth-layout';
import { Login } from './core/pages/login/login';
import { Register } from './core/pages/register/register';
import { ForgetPassword } from './core/pages/forget-password/forget-password';
import { NewPassword } from './core/pages/new-password/new-password';
import { VerifyOTP } from './core/pages/verify-otp/verify-otp';

export const routes: Routes = [
    {path:'' , component:AuthLayout , children:[
        {path:'' , redirectTo:'login' , pathMatch:'full'},
        {path:'login' , component:Login , title:'Login'},
        {path:'register' , component:Register , title:'Register'},
        {path:'forgetPassword',component:ForgetPassword , title:'Forget Password'},
        {path:'verifyOTP',loadComponent:()=> import("./core/pages/verify-otp/verify-otp").then((c)=>c.VerifyOTP) , title:'Verify OTP'},
        {path:'resetPassword' ,loadComponent:()=> import("./core/pages/new-password/new-password").then((c)=>c.NewPassword) , title:'Reset Password'}

        

    ]}
];
