import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Studio } from 'src/app/shared/types/studio';
import { StudioService } from '../studio.service';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  studiosList: Studio[] = [];
  isLoading: boolean = true;

  constructor(private studioService: StudioService, private contact: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.studioService.getStudios().subscribe({
      next: (studios) => {
        this.isLoading = false;
        this.studiosList = studios;
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
      }
    })
  }
  date = new Date();

  submit(form: NgForm) {
    this.contact.PostMessage(form.value).subscribe(response => {
      if (response) {
        alert("Your Booking request has been successfully sent");

        this.router.navigate(["/studios"]);
      }
    },
      error => {
        console.log(error);

      })
  }
}