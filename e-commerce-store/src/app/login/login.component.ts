import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onLoginSubmit(): void {
    if (this.username === 'user' && this.password === 'user') {
      
      // User role
      localStorage.setItem('userRole', 'user');
      this.router.navigate(['/user']);
    } else if (this.username === 'admin' && this.password === 'admin') {
      // Admin role
      console.log('enter conde');
      
      localStorage.setItem('userRole', 'admin');
      this.router.navigate(['/admin']);
      console.log('after nav');
      
    } else {
      console.log('Invalid credentials. ');

      alert('Invalid credentials. Please try again.');
    }
  }
}
