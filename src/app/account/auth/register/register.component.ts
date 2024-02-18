import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from './validation';
import { AuthService } from '../service/register.service';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library for generating UUIDs
import { DatePipe, formatDate } from '@angular/common';
import { Router } from '@angular/router';

declare const intlTelInput: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  showPassword: boolean = false;
  showRepeatPassword: boolean = false;
  submitted = false;

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    const mobileCodeInput = document.getElementById('mobile_code') as HTMLInputElement;
    if (mobileCodeInput) {
      const iti = intlTelInput(mobileCodeInput, {
        initialCountry: 'uz',
        separateDialCode: true,
      });
      mobileCodeInput.addEventListener('input', () => {
        mobileCodeInput.setCustomValidity('');
      });
    }

    this.form = this.formBuilder.group(
      {
        id: [this.generateUUID(), Validators.required], // Generate a UUID for the id field
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, [Validators.required, Validators.requiredTrue]],
        phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
        birthDate: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const now = new Date();
    const isoDateString = now.toISOString();

    const userObj = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      phoneNumber: this.form.value.phoneNumber,
      email: this.form.value.email,
      password: this.form.value.password,
      birthDate: this.form.value.birthDate,
      id: this.generateUUID(),
      createdDate: isoDateString,
      updatedDate: isoDateString,
    }

    this.authService.registerUser(userObj).subscribe({
      next: (res) => {
        this.form.reset();
        this.router.navigate(['/signin']);
      },
      error: (err) => {
        // this.toast.error({
        //   summary: err,
        //   duration: 7000,
        // });
      },
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleRepeatPasswordVisibility() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }
}
