import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  hide: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  /* password = new FormControl('', [Validators.required, Validators.password]); */

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Введите значения в поле E-mail.';
    }

    return this.email.hasError('email') ? 'Некорректный формат E-mail.' : '';
  }
}
