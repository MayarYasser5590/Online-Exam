import { Observable } from "rxjs";
import { AuthModel } from "../interfaces/AuthModel";
import { ChangePasswordRequest, EditProfileRequest, ForgotPasswordRequest, ResetPasswordRequest, SignInRequest, SignUpRequest, VerifyResetCodeRequest } from "../interfaces/inputs";

export abstract class AuthAPI{
    abstract signIn(data:SignInRequest) : Observable<AuthModel>;
    abstract signUp(data:SignUpRequest) : Observable<AuthModel>;
    abstract changePassword(data:ChangePasswordRequest) : Observable<AuthModel>;
    abstract deleteMyAccount() : Observable<AuthModel>;
    abstract editProfile(data:EditProfileRequest) : Observable<AuthModel>;
    abstract logOut() : Observable<AuthModel>;
    abstract getLoggedUserInfo() : Observable<AuthModel>;
    abstract forgotPassword(data:ForgotPasswordRequest) : Observable<AuthModel>;
    abstract verifyResetCode(data:VerifyResetCodeRequest) : Observable<AuthModel>;
    abstract resetPassword(data:ResetPasswordRequest) : Observable<AuthModel>;                 
}