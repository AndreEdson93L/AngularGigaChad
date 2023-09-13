import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user : User = {
    username: '',
    password: '',
    email: ''
  }
 
  constructor(private userService: UserService){}

  onSubmit(registrationForm : NgForm){

    this.userService.registerUser(this.user)
    registrationForm.reset()
  }
}
