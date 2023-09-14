import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user : User = {
    username: '',
    password: '',
    email: ''
  }

  users: User[] = []
 
  constructor(private userService: UserService){}

  onSubmit(registrationForm: NgForm) {
    this.userService.registerUser({ ...this.user });  // Send a new instance to the service
    this.users = this.userService.getUsers();
    registrationForm.reset();
  }
  
  //get users
  ngOnInit(){
    this.users = this.userService.getUsers()
  }
}
