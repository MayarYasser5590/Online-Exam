import { Observable } from "rxjs";

export abstract class AuthAPI{
    abstract signIn(data:any) : Observable<any>;
    abstract signUp(data:any) : Observable<any>;
    abstract changePassword(data:any) : Observable<any>;
    abstract deleteMyAccount(data:any) : Observable<any>;
    abstract editProfile(data:any) : Observable<any>;
    abstract logOut(data:any) : Observable<any>;
    abstract getLoggedUserInfo(data:any) : Observable<any>;
    abstract forgotPassword(data:any) : Observable<any>;
    abstract verifyResetCode(data:any) : Observable<any>;
    abstract resetPassword(data:any) : Observable<any>;                 
}