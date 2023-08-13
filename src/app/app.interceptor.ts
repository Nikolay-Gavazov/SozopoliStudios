import { Injectable, Provider } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { AuthService } from "./auth/auth.service";

const {apiUrl} = environment;
@Injectable()
export class AppInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){
    }
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
        if(req.url.startsWith('/api')){
            
            req = req.clone({
                url:req.url.replace('/api',apiUrl),
            })  
        }
        return next.handle(req);
        }
    }
export const appInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS
}