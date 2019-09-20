import { Injectable, ErrorHandler } from '@angular/core';
import { SimpleService } from '../simple-service/simple-service.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalHandlerService extends ErrorHandler {
  constructor(private simpleService: SimpleService) {
    super();
  }

  handleError(error: any) {
    super.handleError(error);

    if (!(error instanceof HttpErrorResponse)) {
      this.handle(error);
    }
  }

  handle(error: any) {
    console.error('Error sended to API: ' + error);
    this.simpleService
      .logError({
        error: error.message,
        stack: error.stack
      })
      .subscribe();
  }
}
