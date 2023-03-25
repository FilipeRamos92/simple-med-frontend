import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Patient } from './patient';

@Injectable()
export class PatientsService {
    patientUrl = 'http://localhost:8080/api/v1/patients';

    constructor(private http: HttpClient) {}

    getPatients(): Observable<Patient[]> {
        return this.http.get<Patient[]>(this.patientUrl);
    }

    addPatient(patient: Patient): Observable<Patient> {
        return this.http.post<Patient>(this.patientUrl, patient);
    }

    deletePatient(id: number): Observable<unknown> {
        const url = `${this.patientUrl}/${id}`;
        return this.http.delete(url);
    }

    updatePatient(patient: Patient): Observable<Patient> {
        const url = `${this.patientUrl}/${patient.id}`
        return this.http.put<Patient>(url, patient);
    }
}