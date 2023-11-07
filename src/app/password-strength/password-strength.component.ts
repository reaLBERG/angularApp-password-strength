import { Component, OnInit } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnInit {
  strength: string = 'E';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnInit() {
    this.passwordStrengthService.passwordStrength$.subscribe(
      strength => {this.strength = strength;}
    );
  }

  getSectionClass(section: string){
    let strength = this.strength;
    let classMap = {
      gray: strength !== 'NE' || 'S',
      red: strength === 'NE' || (strength === 'L' && section === 'first'),
      yellow: strength === 'M' && section !== 'third',
      green: strength === 'S' 
    };
    return classMap;
  }
}
