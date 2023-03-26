import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../patients/patient';

@Injectable({
  providedIn: 'root'
})
export class RegisterPatientService {
  patientUrl = 'http://localhost:8080/api/v1/patients';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  }

  postPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientUrl, patient);
  }

  deletePatient(id: number): Observable<unknown>{
    const url = `${this.patientUrl}/${id}`
    return  this.http.delete(url);
  }
}
