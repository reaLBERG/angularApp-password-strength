import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='TestAngular';
  password = '';
  strength = 'E';

  updateStrength() {
     if (!this.password) {
       this.strength = 'E';
     } else if (this.password.length < 8) {
       this.strength = 'NE';
     } else {
       let hasLetter = /[a-zA-Z]/.test(this.password);
       let hasDigit = /\d/.test(this.password);
       let hasSymbol = /[^a-zA-Z\d]/.test(this.password);
 
       if (hasLetter && hasDigit && hasSymbol) {
         this.strength = 'S';
       } else if (hasLetter && hasDigit || hasLetter && hasSymbol || hasDigit && hasSymbol) {
         this.strength = 'M';
       } else if(hasLetter || hasDigit || hasSymbol) {
         this.strength = 'L';
       }
     }
  }

  getSectionClass(section: string) {
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
