import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  imports : [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatButton
  ],
  template: `
    <div class="login-container mt-10">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Login</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="flex flex-col">
            <mat-form-field class="mt-1">
              <mat-label>Username</mat-label>
              <input matInput formControlName="username" placeholder="Enter username">
            </mat-form-field>
            <mat-form-field class="">
              <mat-label>Password</mat-label>
              <input matInput type="password" formControlName="password" placeholder="Enter password">
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit" [disabled]="loginForm.invalid">
              Login
            </button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles  : `
    .login-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .full-width {
      width: 100%;
      margin-bottom: 1rem;
    }
  `,
})
export class LoginComponent {
  private fb          = inject(FormBuilder);
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  private authService = inject(AuthService);

  onSubmit() {
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;
      this.authService.login(username!, password!);
    }
  }
}
