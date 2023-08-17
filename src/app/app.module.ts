import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appInterceptorProvider } from './app.interceptor';
import { ContactService } from './studio/contact.service';
import { ContactsComponent } from './core/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
  ],
  imports: [
    RouterModule,
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [appInterceptorProvider, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
