import { Component, Input } from '@angular/core';
import { MainButton } from "../../../../../shared/components/UI/main-button/main-button";

@Component({
  selector: 'app-auth-footer',
  standalone: true,
  imports: [ MainButton],
  templateUrl: './auth-footer.html',
  styleUrls: ['./auth-footer.scss']
})
export class AuthFooterComponent {

  @Input() buttonLabel: string = 'Submit';
  @Input() isLoading: boolean = false;

  @Input() hasRegisterLink: boolean = true;
  @Input() registerText: string = `Don’t have an account?`;
}
