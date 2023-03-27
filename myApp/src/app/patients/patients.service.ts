import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patientUrl = 'http://localhost:8080/api/v1/patients';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  }

  postPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientUrl, patient);
  }

  putPatient(updatedPatient: Patient): Observable<Patient> {
    console.log(updatedPatient);
    const url = `${this.patientUrl}/${updatedPatient.id}`;
    return this.http.put<Patient>(url, updatedPatient);
  }

  deletePatient(id: number): Observable<unknown>{
    const url = `${this.patientUrl}/${id}`
    return  this.http.delete(url);
  }
}
