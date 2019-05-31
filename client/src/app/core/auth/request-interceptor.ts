import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor{

    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>> {
        throw new Error('Method not implemented.');
    }

}