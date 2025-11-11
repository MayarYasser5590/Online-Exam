import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthFlow {
  private forgetPassActive = false;
  private verified = false;   

  constructor() {
    this.forgetPassActive = sessionStorage.getItem('forgetPassActive') === 'true';
    this.verified = sessionStorage.getItem('verified') === 'true';

  }

  startFlow() {
    this.forgetPassActive = true;
    this.verified = false
    sessionStorage.setItem('forgetPassActive', 'true');
    sessionStorage.setItem('verified', 'false');
  }

    markVerified() {
    this.verified = true;
    sessionStorage.setItem('verified', 'true');

  }

  isFlowActive(): boolean {
    return this.forgetPassActive;
  }

  endFlow() {
    this.forgetPassActive = false;
    this.verified = false;
    sessionStorage.removeItem('forgetPassActive');
    sessionStorage.removeItem('verified');
  }

    isVerified() {
    return this.verified;
  }

}
