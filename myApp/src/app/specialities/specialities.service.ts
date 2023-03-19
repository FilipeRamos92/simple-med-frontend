import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Speciality } from "./speciality";

@Injectable()
export class SpecialitiesService {
    specialityUrl = 'http://localhost:8080/api/v1/specialities';

    constructor(private http: HttpClient) {}

    getSpecialities(): Observable<Speciality[]> {
        return this.http.get<Speciality[]>(this.specialityUrl);
    }

    addSpeciality(speciality: Speciality): Observable<Speciality> {
        return this.http.post<Speciality>(this.specialityUrl, speciality);
    }

    deleteSpeciality(id: number): Observable<unknown> {
        const url = `${this.specialityUrl}/${id}`; 
        return this.http.delete(url);
      }
}