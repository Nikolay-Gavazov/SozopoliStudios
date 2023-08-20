import { Component, OnInit } from '@angular/core';
import { StudioService } from '../studio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  studio: any;
  isLoading: boolean = true;
  isAdmin: boolean = false;
  id!: string;
  deleteStudio(): void {
    const confirmation = confirm("Are you sure you want to delete");
    if (confirmation) {
      this.studioService.deleteStudio(this.id).subscribe((response) => {
        this.router.navigate(['/']);
      })
    }
  }
  constructor(private studioService: StudioService, private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'] || '';

    this.studioService.getStudio(this.id).subscribe((studio) => {
      this.isLoading = false;
      this.studio = studio;
      if (this.authService.userData) {
        this.isAdmin = this.authService.userData.isAdmin;
      }
    })
  }

}
