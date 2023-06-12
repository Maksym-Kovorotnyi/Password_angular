import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  dynamicClass: string[] = ['gray', 'gray', 'gray'];

  

  passwordStrengthCheck() {
    this.dynamicClass = ['gray', 'gray', 'gray']
    if (this.password.length === 0) {
      this.dynamicClass = ['gray', 'gray', 'gray'];
    } else if (this.password.length < 8) {
      this.dynamicClass = ['red', 'red', 'red'];
    }
    else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[^\w\s]/.test(this.password)) {
      this.dynamicClass = ['green', 'green', 'green'];
    } 
    else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) || /[a-zA-Z]/.test(this.password) && /[^\w\s]/.test(this.password) || /[0-9]/.test(this.password) && /[^\w\s]/.test(this.password)) {
      this.dynamicClass = ['yellow', 'yellow', 'gray']
    } else {
      this.dynamicClass = ['red', 'gray', 'gray']};
    }
    }

  
