import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  onSubmit() {
    // Handle the login logic here (e.g., send credentials to a server)
    console.log('Login clicked', this.user);
  }
}
