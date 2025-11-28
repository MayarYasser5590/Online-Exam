import { inject, Injectable } from "@angular/core";
import { AUTH_LIB_CONFIG } from "../auth-config";

@Injectable({ providedIn: 'root' })
export class AuthEndPoint {

  private readonly config = inject(AUTH_LIB_CONFIG);
  private readonly base = this.config.apiUrl;

  readonly signUp = `${this.base}/signup`;
  readonly signIn = `${this.base}/signin`;
  readonly changePassword = `${this.base}/changePassword`;
  readonly deleteMyAccount = `${this.base}/deleteMe`;
  readonly editProfile = `${this.base}/editProfile`;
  readonly logOut = `${this.base}/logout`;
  readonly getLoggedUserInfo = `${this.base}/profileData`;
  readonly forgotPassword = `${this.base}/forgotPassword`;
  readonly verifyResetCode = `${this.base}/verifyResetCode`;
  readonly resetPassword = `${this.base}/resetPassword`;
}
