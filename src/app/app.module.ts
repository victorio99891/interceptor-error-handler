import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { SimpleService } from './simple-service/simple-service.service';
import { MyInterceptorService } from './tools/my-interceptor.service';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { GlobalHandlerService } from './tools/global-handler.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    SimpleService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: GlobalHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
