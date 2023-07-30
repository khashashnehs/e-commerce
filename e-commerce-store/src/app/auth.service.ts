import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'user', password: 'user', role: 'user' },
    { username: 'admin', password: 'admin', role: 'admin' }
  ];

  private loggedInUser: any;

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedInUser = null;
  }

  isLoggedIn(): boolean {
    return !!this.loggedInUser;
  }

  getUserRole(): string {
    return this.loggedInUser ? this.loggedInUser.role : '';
  }
}
