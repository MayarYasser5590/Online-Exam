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

  private get token() {
  return localStorage.getItem('token');
}

  signUp(data: any): Observable<any> {
      return this.httpClient.post(AuthEndPoint.signUp , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))),
      catchError(err => of(err))
   )
  }
    signIn(data: any): Observable<any> {
      return this.httpClient.post(AuthEndPoint.signIn , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))),
      catchError(err => of(err))
)
  }
    changePassword(data: any): Observable<any> {
      return this.httpClient.patch(AuthEndPoint.changePassword , data ,{
        headers:{
        Authorization: `Bearer ${this.token}`
        }
      }).pipe(map((res => this.authAPIAdaptorService.adapt(res))),
         catchError(err => of(err))
)
  }
    deleteMyAccount(data: any): Observable<any> {
      return this.httpClient.delete(AuthEndPoint.deleteMyAccount , {
        body:data
      }).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))),      
      catchError(err => of(err))
)
  }
    editProfile(data: any): Observable<any> {
      return this.httpClient.put(AuthEndPoint.editProfile , data ,{
        headers:{
        Authorization: `Bearer ${this.token}`
        }}).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))),      
      catchError(err => of(err))
)
  }
    logOut(): Observable<any> {
      return this.httpClient.get(AuthEndPoint.logOut , {
        headers:{
        Authorization: `Bearer ${this.token}`
        }}
      ).
      pipe(map((res =>{
        localStorage.removeItem('token');
        return this.authAPIAdaptorService.adapt(res)})),      
      catchError(err => of(err))

    )
  }
    getLoggedUserInfo(): Observable<any> {
      return this.httpClient.get(AuthEndPoint.getLoggedUserInfo , {
        headers:{
        Authorization: `Bearer ${this.token}`
        }}).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))),      
      catchError(err => of(err))
)
  }
    forgotPassword(data: any): Observable<any> {
      return this.httpClient.post(AuthEndPoint.forgotPassword , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))),      
      catchError(err => of(err))
)
  }
    verifyResetCode(data: any): Observable<any> {
      return this.httpClient.post(AuthEndPoint.verifyResetCode , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))),      
      catchError(err => of(err))
)
  }
    resetPassword(data: any): Observable<any> {
      return this.httpClient.put(AuthEndPoint.resetPassword , data).
      pipe(map((res => this.authAPIAdaptorService.adapt(res))),      
      catchError(err => of(err))
)
  }
}
