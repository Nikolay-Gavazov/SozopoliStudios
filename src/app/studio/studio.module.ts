import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { DetailsComponent } from './details/details.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudiosComponent } from './studios/studios.component';
import { StudioRoutingModule } from './studio-routing.module';


@NgModule({
  declarations: [
    StudiosComponent,
    BookingComponent,
    DetailsComponent,
    LoaderComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudioRoutingModule
  ]
})
export class StudioModule { }
