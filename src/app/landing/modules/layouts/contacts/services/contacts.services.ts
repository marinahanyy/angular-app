import { API_BASE_URL } from './../../../../../../api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private apiUrl = `${API_BASE_URL}/Messages`;

  constructor(private http: HttpClient, private router: Router) {
  }

  postMessage(message: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`, message)
  }
}
