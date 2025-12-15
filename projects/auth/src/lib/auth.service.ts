import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthApi';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';
import { AuthAPIResponse } from './interfaces/AuthAPIResponse ';
import { AuthModel } from './interfaces/AuthModel';
import { ChangePasswordRequest, EditProfileRequest, ForgotPasswordRequest, ResetPasswordRequest, SignInRequest, SignUpRequest, VerifyResetCodeRequest } from './interfaces/inputs';
import { AUTH_LIB_CONFIG } from './auth-config';
import { AuthEndPoint } from '../public-api';

@Injectable({
   providedIn:'root'
})
export class AuthService implements AuthAPI {

   private readonly config = inject(AUTH_LIB_CONFIG);
   private readonly authBaseUrl = this.config.apiUrl;

   private httpClient = inject(HttpClient)
   private authAPIAdaptorService =inject(AuthAPIAdaptorService)

  signUp(data: Partial<SignUpRequest>): Observable<AuthModel> {
      return this.httpClient.post(this.authBaseUrl+AuthEndPoint.signUp , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),
      catchError(err => throwError(() => err))
   )
  }

    signIn(data: Partial<SignInRequest>): Observable<AuthModel> {
      return this.httpClient.post(this.authBaseUrl+AuthEndPoint.signIn , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),
      catchError(err => throwError(() => err))
)
  }
    changePassword(data: Partial<ChangePasswordRequest>): Observable<AuthModel> {
      return this.httpClient.patch(this.authBaseUrl+AuthEndPoint.changePassword , data).pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),
         catchError(err => throwError(() => err))
)
  }
deleteMyAccount(): Observable<AuthModel> {
  return this.httpClient.delete(this.authBaseUrl+AuthEndPoint.deleteMyAccount).pipe(
    map(res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse)),
    catchError(err => throwError(() => err))
  );
}

    editProfile(data: Partial<EditProfileRequest>): Observable<AuthModel> {
      return this.httpClient.put(this.authBaseUrl+AuthEndPoint.editProfile , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),      
      catchError(err => throwError(() => err))
)
  }
logOut(): Observable<AuthModel> {
  return this.httpClient.get(this.authBaseUrl+AuthEndPoint.logOut).pipe(
    map(res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse)
    ),
    catchError(err => throwError(() => err))
  );
}

getLoggedUserInfo(): Observable<AuthModel> {
  return this.httpClient.get(this.authBaseUrl+AuthEndPoint.getLoggedUserInfo).pipe(
    map(res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse)),
    catchError(err => throwError(() => err))
  );
}
    forgotPassword(data: Partial<ForgotPasswordRequest>): Observable<AuthModel> {
      return this.httpClient.post(this.authBaseUrl+AuthEndPoint.forgotPassword, data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),      
      catchError(err => throwError(() => err))
)
  }
    verifyResetCode(data: Partial<VerifyResetCodeRequest>): Observable<AuthModel> {
      return this.httpClient.post(this.authBaseUrl+AuthEndPoint.verifyResetCode , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),      
      catchError(err => throwError(() => err))
)
  }
    resetPassword(data: Partial<ResetPasswordRequest>): Observable<AuthModel> {
      return this.httpClient.put(this.authBaseUrl+AuthEndPoint.resetPassword , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),      
      catchError(err => throwError(() => err))
)
  }
}
