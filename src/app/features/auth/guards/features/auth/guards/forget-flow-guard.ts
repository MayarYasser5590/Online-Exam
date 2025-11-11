import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthFlow } from '../../../../services/auth-flow';

@Injectable({
  providedIn: 'root',
})
export class ForgetFlowGuard implements CanActivate {
  private authFlow = inject(AuthFlow);
  private router = inject(Router);

 canActivate(route: ActivatedRouteSnapshot): boolean {
  const path = route.routeConfig?.path;

  if (!this.authFlow.isFlowActive()) {
    this.router.navigate(['/forgetPassword']);
    return false;
  }

  if (path === 'resetPassword' && !this.authFlow.isVerified()) {
    this.router.navigate(['/verifyOTP']);
    return false;
  }

  return true;
}
}
