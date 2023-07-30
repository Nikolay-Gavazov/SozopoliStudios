import { Injectable, Provider } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

const {apiUrl} = environment;
@Injectable()
export class AppInterceptor implements HttpInterceptor{
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
        if(req.url.startsWith('/api')){
            req= req.clone({
                url:req.url.replace('/api',apiUrl),
                withCredentials:true
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