import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /* isAdmin: boolean = false; */
  constructor(private authService: AuthService) { }
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  get isAdmin(){
    if(this.authService.isLoggedIn){
      return this.authService.userData.isAdmin;
    }
  }
  
}
