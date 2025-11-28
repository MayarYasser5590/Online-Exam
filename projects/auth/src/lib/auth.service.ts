import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthApi';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/AuthEndPoint';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';
import { AuthAPIResponse } from './interfaces/AuthAPIResponse ';
import { AUTH_LIB_CONFIG } from './auth-config';
import { AuthModel } from './interfaces/AuthModel';
import { ChangePasswordRequest, EditProfileRequest, ForgotPasswordRequest, ResetPasswordRequest, SignInRequest, SignUpRequest, VerifyResetCodeRequest } from './interfaces/inputs';

@Injectable({
   providedIn:'root'
})
export class AuthService implements AuthAPI {

   private httpClient = inject(HttpClient)
   private authAPIAdaptorService =inject(AuthAPIAdaptorService)
   private authEndpoints = inject(AuthEndPoint);

  signUp(data: Partial<SignUpRequest>): Observable<AuthModel> {
      return this.httpClient.post(this.authEndpoints.signUp , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),
      catchError(err => throwError(() => err))
   )
  }

    signIn(data: Partial<SignInRequest>): Observable<AuthModel> {
      return this.httpClient.post(this.authEndpoints.signIn , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),
      catchError(err => throwError(() => err))
)
  }
    changePassword(data: Partial<ChangePasswordRequest>): Observable<AuthModel> {
      return this.httpClient.patch(this.authEndpoints.changePassword , data).pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),
         catchError(err => throwError(() => err))
)
  }
deleteMyAccount(): Observable<AuthModel> {
  return this.httpClient.delete(this.authEndpoints.deleteMyAccount).pipe(
    map(res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse)),
    catchError(err => throwError(() => err))
  );
}

    editProfile(data: Partial<EditProfileRequest>): Observable<AuthModel> {
      return this.httpClient.put(this.authEndpoints.editProfile , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),      
      catchError(err => throwError(() => err))
)
  }
logOut(): Observable<AuthModel> {
  return this.httpClient.get(this.authEndpoints.logOut).pipe(
    map(res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse)
    ),
    catchError(err => throwError(() => err))
  );
}

getLoggedUserInfo(): Observable<AuthModel> {
  return this.httpClient.get(this.authEndpoints.getLoggedUserInfo).pipe(
    map(res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse)),
    catchError(err => throwError(() => err))
  );
}
    forgotPassword(data: Partial<ForgotPasswordRequest>): Observable<AuthModel> {
      return this.httpClient.post(this.authEndpoints.forgotPassword , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),      
      catchError(err => throwError(() => err))
)
  }
    verifyResetCode(data: Partial<VerifyResetCodeRequest>): Observable<AuthModel> {
      return this.httpClient.post(this.authEndpoints.verifyResetCode , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),      
      catchError(err => throwError(() => err))
)
  }
    resetPassword(data: Partial<ResetPasswordRequest>): Observable<AuthModel> {
      return this.httpClient.put(this.authEndpoints.resetPassword , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res as AuthAPIResponse))),      
      catchError(err => throwError(() => err))
)
  }
}
