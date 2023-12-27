import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit() {
    // Handle the signup logic here (e.g., send user data to a server)
    console.log('Sign Up clicked', this.user);
  }
}
