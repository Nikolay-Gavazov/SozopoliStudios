import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioRoutingModule } from './studio-routing.module';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule,
    FormsModule
  ]
})
export class StudioModule { }
