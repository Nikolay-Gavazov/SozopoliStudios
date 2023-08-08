import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './studio/gallery/gallery.component';
import { StudiosComponent } from './studio/studios/studios.component';
import { BookingComponent } from './studio/booking/booking.component';
import { AuthModule } from './auth/auth.module';
import { StudioModule } from './studio/studio.module';
import { appInterceptorProvider } from './app.interceptor';
import { LoaderComponent } from './shared/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    StudiosComponent,
    BookingComponent,
    LoaderComponent,
    
  ],
  imports: [
    RouterModule,
    AuthModule,
    StudioModule,
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
