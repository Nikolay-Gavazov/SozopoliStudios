import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginError: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  login(form: NgForm): void {
    if (form.invalid) return;

    const { email, password } = form.value;

    this.authService.login(email, password).subscribe({
      next: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        form.reset();
        this.router.navigate(['/studios']);
      },
      error: (error) => {
        this.loginError = error.error.message;
      }
    });

  }
}
