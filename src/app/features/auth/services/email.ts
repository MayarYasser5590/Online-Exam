import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private _email = signal<string | null>(null);

  setEmail(email: string) {
    this._email.set(email);
  }

  getEmail() {
    return this._email();
  }

  emailSignal = this._email;
}
