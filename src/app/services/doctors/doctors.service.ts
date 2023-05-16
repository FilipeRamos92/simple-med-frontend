import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Doctor } from 'src/app/interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseApiUrl;
  apiDoctorsUrl: string = `${this.baseUrl}api/v1/doctors`;

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiDoctorsUrl);
  }
}
