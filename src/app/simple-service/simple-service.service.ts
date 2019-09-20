import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Config } from '../config/config-file';
import { Observable } from 'rxjs';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {
  constructor(private httpClient: HttpClient) {}

  headers = new HttpHeaders();

  simpleGet(): Observable<Message> {
    return this.httpClient.get<Message>(Config.API_BASE_MSG);
  }

  logError(error: any): Observable<void> {
    this.headers.append('Content-Type', 'application/json');

    return this.httpClient.post<void>(Config.API_BASE_LOG, error, {
      headers: this.headers
    });
  }
}
