import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const {apiUrl} = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  user$ = this.user$$.asObservable();

  user: User | undefined;

  subscription: Subscription;
  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) =>{
      this.user = user;
    })
   }

   login(email: string, password: string){
    return this.http.post<User>(`${apiUrl}/login`, { email: email, password: password}).pipe(tap(user => this.user$$.next(user)));
   }

   register(email: string, password: string){
    return this.http.post<User>(`${apiUrl}/register`, { email:email, password:password}).pipe(tap(user => this.user$$.next(user)));
   }

   logout(){
    return this.http.post<User>(`${apiUrl}/logout` ,{}).pipe(tap(() => this.user$$.next(undefined)));
   }

   get isLoggedIn(){
    return !!this.user;
   }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
