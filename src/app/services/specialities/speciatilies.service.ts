import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Speciality } from '../../interfaces/speciality';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class SpeciatiliesService {

  private data = new BehaviorSubject('');
  data$ = this.data.asObservable();

  baseUrl: string = environment.baseApiUrl;
  apiSpecialityUrl: string = `${this.baseUrl}api/v1/specialities`;

  constructor(private http: HttpClient, private utilsService: UtilsService) { }

  getSpecialities(): Observable<string[]> {
    return this.http.get<Speciality[]>(this.apiSpecialityUrl)
      .pipe(
        map(response => response.map(speciality => this.utilsService.capitalize(speciality.name))));
  }

  changeData(data: string) {
    this.data.next(data);
  }
}
