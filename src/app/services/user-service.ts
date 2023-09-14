import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // 1 . Property declaration
  //Mock db for the users
  private users: User[] = []

  // 2 . constructor
  constructor() { }

  registerUser(user: User) {
    const existingUser = this.users.find(u => u.email.toLowerCase() === user.email.toLowerCase());
    if (existingUser) {
      console.log('Email already registered');
      return;
    }
  
    this.users = [...this.users, { ...user }];  // Use spread operator to push a new instance
    
    console.log({
      "username": user.username,
      "password": user.password,
      "email": user.email
    });
  }
  
  getUsers(): User[] {
    return this.users;
  }
}
