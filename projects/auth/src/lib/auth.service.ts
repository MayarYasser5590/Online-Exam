import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthApi';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/AuthEndPoint';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';

@Injectable({
   providedIn:'root'
})
export class AuthService implements AuthAPI {

   httpClient = inject(HttpClient)
   authAPIAdaptorService =inject(AuthAPIAdaptorService)

  signUp(data: any): Observable<any> {
      return this.httpClient.post(AuthEndPoint.signUp , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))), 
      catchError(err => of(err))
   )
  }
    signIn(data: any): Observable<any> {
      return this.httpClient.post(AuthEndPoint.signIn , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))))
  }
    changePassword(data: any): Observable<any> {
      return this.httpClient.patch(AuthEndPoint.changePassword , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))))
  }
    deleteMyAccount(data: any): Observable<any> {
      return this.httpClient.delete(AuthEndPoint.deleteMyAccount , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))))
  }
    editProfile(data: any): Observable<any> {
      return this.httpClient.put(AuthEndPoint.editProfile , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))))
  }
    logOut(data: any): Observable<any> {
      return this.httpClient.get(AuthEndPoint.logOut , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))))
  }
    getLoggedUserInfo(data: any): Observable<any> {
      return this.httpClient.get(AuthEndPoint.getLoggedUserInfo , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))))
  }
    forgotPassword(data: any): Observable<any> {
      return this.httpClient.post(AuthEndPoint.forgotPassword , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))))
  }
    verifyResetCode(data: any): Observable<any> {
      return this.httpClient.post(AuthEndPoint.verifyResetCode , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))))
  }
    resetPassword(data: any): Observable<any> {
      return this.httpClient.put(AuthEndPoint.resetPassword , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))))
  }
}
