import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../shared/types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  subscription: Subscription;
  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
    this.user = user;
    
    })
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(`/api/login`, { email, password })
      .pipe(tap(user => this.user$$.next(user)));
  }

  register(email: string, password: string) {
    return this.http.post<User>(`${apiUrl}/register`, { email: email, password: password }).pipe(tap(user => this.user$$.next(user)));
    
  }

  logout() {
    return this.http.post<User>(`${apiUrl}/logout`, {}).pipe(tap(() => this.user$$.next(undefined)));
  }

  get isLoggedIn() {
    return localStorage.getItem("user");
  }
  
  get userData() {
    const user: any = localStorage.getItem("user");
    if(user){
      return JSON.parse(user)
    }
    return null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
