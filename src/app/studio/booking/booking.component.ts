import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Studio } from 'src/app/shared/types/studio';
import { StudioService } from '../studio.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit{
  studiosList: Studio[] = [];
  isLoading: boolean = true;

  constructor(private studioService: StudioService){}

  ngOnInit(): void {
    this.studioService.getStudios().subscribe({
      next:(studios) =>{
        this.isLoading = false;
        this.studiosList = studios;
      },
      error:(error) =>{
        this.isLoading = false;
        console.log(error);
      }
    })
  }
  date = new Date();

  submit(form: NgForm){
    console.log(form.value);
    
  }
}
