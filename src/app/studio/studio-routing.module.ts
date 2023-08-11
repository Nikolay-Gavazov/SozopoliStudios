import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudiosComponent } from './studios/studios.component';
import { DetailsComponent } from './details/details.component';
import { UserGuard } from '../core/guards/userGuard';
import {AdminGuard} from '../core/guards/adminGuard'
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';


const routes: Routes = [
    {path: '', component: StudiosComponent},
    {path: 'create', component: CreateComponent , canActivate:[AdminGuard]},
  {path: 'gallery', component: GalleryComponent},
  {path: 'book', component: BookingComponent, canActivate:[UserGuard]},
  {path: ':id', component: DetailsComponent},
  {path: 'edit/:id', component: EditComponent, canActivate:[AdminGuard]},
  {path: 'delete/:id', component: EditComponent, canActivate:[AdminGuard]},
  {path: "*", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }