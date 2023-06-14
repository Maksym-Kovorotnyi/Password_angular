import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): string[] {
    if (password.length === 0) {
      return ['gray', 'gray', 'gray'];
    }else if (password.length < 8) {
      return ['red', 'red', 'red'];
    }
    else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[^\w\s]/.test(password)) {
      return ['green', 'green', 'green'];
    } else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) || /[a-zA-Z]/.test(password) && /[^\w\s]/.test(password) || /[0-9]/.test(password) && /[^\w\s]/.test(password)) {
      return ['yellow', 'yellow', 'gray'];
    } else {
      return ['red', 'gray', 'gray'];
    }
  }
}