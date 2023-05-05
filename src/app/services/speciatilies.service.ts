import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Speciality } from '../interfaces/speciality';

@Injectable({
  providedIn: 'root'
})
export class SpeciatiliesService {

  baseUrl: string = environment.baseApiUrl;
  apiSpecialityUrl: string = `${this.baseUrl}api/v1/specialities`;

  constructor(private http: HttpClient) { }

  getSpecialities(): Observable<string[]> {
    return this.http.get<Speciality[]>(this.apiSpecialityUrl)
      .pipe(
        map(response => response.map(speciality => this.capitalize(speciality.name))));
  }

  capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }


}
