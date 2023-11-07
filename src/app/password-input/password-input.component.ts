import { Component } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent {
  password: string = '';
  
  constructor(private passwordStrengthService: PasswordStrengthService) { }
  
  calculateStrength() {
    this.passwordStrengthService.calculateStrength(this.password);
  }
}
