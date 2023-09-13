import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
    email: ''
  }

  onSubmit(){
    console.log({
      "username" : this.user.username,
      "password" : this.user.password,
      "email" : this.user.email
    })
  }
}
