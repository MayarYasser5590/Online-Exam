import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ForgetPassword } from './pages/forget-password/forget-password';
import { ForgetFlowGuard } from './guards/features/auth/guards/forget-flow-guard';


export const authRoutes: Routes = [
     {path:'' , component:AuthLayout , children:[
         {path:'' , redirectTo:'login' , pathMatch:'full'},
         {path:'login' , component:Login , title:'Login'},
         {path:'register' , component:Register , title:'Register'},
         {path:'forgetPassword',component:ForgetPassword , title:'Forget Password'},
         {path:'verifyOTP',loadComponent:()=> import("./pages/verify-otp/verify-otp").then((c)=>c.VerifyOTP) , canActivate: [ForgetFlowGuard] , title:'Verify OTP'},
         {path:'resetPassword' ,loadComponent:()=> import("./pages/new-password/new-password").then((c)=>c.NewPassword) , canActivate: [ForgetFlowGuard] , title:'Reset Password'}
     ]}
];
