import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudiosComponent } from './studios/studios.component';
import { DetailsComponent } from './details/details.component';
import { UserGuard } from '../core/guards/userGuard';


const routes: Routes = [
    {path: '', component: StudiosComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'book', component: BookingComponent, canActivate:[UserGuard]},
  {path: ':id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }