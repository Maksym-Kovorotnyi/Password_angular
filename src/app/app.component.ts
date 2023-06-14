import { Component, OnInit } from '@angular/core';
import { PasswordStrengthService } from './services/password-strength.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dynamicClass: string[] = ['gray', 'gray', 'gray'];

  onPasswordStrengthCheck(dynamicClass: string[]) {
    this.dynamicClass = dynamicClass;
  }
}
  
