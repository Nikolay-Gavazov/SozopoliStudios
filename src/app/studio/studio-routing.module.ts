import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudiosComponent } from './studios/studios.component';


const routes: Routes = [
    {path: 'studios', component: StudiosComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'book', component: BookingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }