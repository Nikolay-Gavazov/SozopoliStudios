import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginError:string = '';
  constructor(private authService: AuthService, private router: Router) { }

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;

    this.authService.register(email, password).subscribe({
      next:(user)=>{
        localStorage.setItem("user", JSON.stringify(user));
      form.reset();
      this.router.navigate(['/studios']);
      },
      error:(error)=>{
        this.loginError = error.error.message;
      }
    });
  }
}
