import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PasswordStrengthService } from '../services/password-strength.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {
  @Output() passwordStrengthCheck = new EventEmitter<string[]>();

  reactiveForm: FormGroup;

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      password: new FormControl('')
    });
  }

  onPasswordChange() {
    const password = this.reactiveForm.value.password;
    const dynamicClass = this.passwordStrengthService.getPasswordStrength(password);
    this.passwordStrengthCheck.emit(dynamicClass);
  }
}