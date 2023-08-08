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
  constructor(private authService: AuthService, private router: Router) { }

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;

    this.authService.register(email, password).subscribe((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      form.reset();
      this.router.navigate(['/']);
    })
  }
}
