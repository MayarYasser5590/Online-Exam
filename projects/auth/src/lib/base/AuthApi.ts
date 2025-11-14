import { Observable } from "rxjs";

export abstract class AuthAPI{
    abstract signIn(data:any) : Observable<any>;
    abstract signUp(data:any) : Observable<any>;
    abstract changePassword(data:any) : Observable<any>;
    abstract deleteMyAccount() : Observable<any>;
    abstract editProfile(data:any) : Observable<any>;
    abstract logOut() : Observable<any>;
    abstract getLoggedUserInfo() : Observable<any>;
    abstract forgotPassword(data:any) : Observable<any>;
    abstract verifyResetCode(data:any) : Observable<any>;
    abstract resetPassword(data:any) : Observable<any>;                 
}