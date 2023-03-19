import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Patient } from './patient';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json',
    })
};

@Injectable()
export class PatientsService {
    patientUrl = 'http://localhost:8080/api/v1/patients';

    constructor(private http: HttpClient) {}

    // Get patients from the server
    getPatients(): Observable<Patient[]> {
        return this.http.get<Patient[]>(this.patientUrl);
    }

    addPatient(patient: Patient): Observable<Patient> {
        return this.http.post<Patient>(this.patientUrl, patient);
    }
}