import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { environment } from '../environments/environment';

import { Doctor } from '../doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService implements OnInit {
  baseUrl = environment.baseApiUrl;
  apiDoctorsUrl = `${this.baseUrl}api/v1/doctors`;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiDoctorsUrl);
  }
}
