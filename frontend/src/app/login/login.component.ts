import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // TODO: Add properties for email, password, showPassword, errorMessage, isLoading
  // TODO: Add constructor with Router
  // TODO: Add togglePassword() method
  // TODO: Add onSubmit() method
  // TODO: Add isValidEmail() method

    email: string = '';
    password: string = '';
    showPassword: boolean = false;
    errorMessage: string = '';
    isLoading: boolean = false;

    constructor(private router: Router)
    {

    }

    togglePassword(): void {
        this.showPassword = !this.showPassword;
    }

    onSubmit(): void 
    {  
        console.log('Form submitted');
    }

    isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

}
