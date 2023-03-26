import { Component, OnInit } from "@angular/core";

import { Patient } from "./patient";
import { PatientsService } from "./patients.service";

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css'],
    providers: [PatientsService]
})

export class PatientsComponent implements OnInit {
    patients: Patient[] = [];
    editPatient: Patient | undefined;
    firstName = '';
    lastName= '';
    email= '';
    birthdate= '';
    gender= '';
    cellphone= '';

    constructor(private patientService: PatientsService) {}

    ngOnInit(): void {
        this.getPatients();
    }

    getPatients(): void {
        this.patientService.getPatients()
            .subscribe(patients => (this.patients = patients))
    }
    
    addPatient(
        firstName: string,
        lastName: string, 
        email: string,
        birthdate: string,
        gender: string,
        cellphone: string
    ): void {
        this.editPatient = undefined;
        firstName = firstName.trim();
        lastName = lastName.trim();
        email = email.trim();
        birthdate = birthdate.trim();
        gender = gender.trim();
        cellphone = cellphone.trim();
        if (!firstName && !lastName) {
            return;
        }
        const newPatient: Patient = { 
            firstName, 
            lastName,
            email,
            birthdate,
            gender,
            cellphone
        } as Patient;

        this.patientService
            .addPatient(newPatient)
            .subscribe((patient) => this.patients.push(patient));
    }

    deletePatient(patient: Patient): void {
        this.patients = this.patients.filter(p => p !== patient);
        this.patientService
            .deletePatient(patient.id)
            .subscribe();
    }

    edit(firstName: string) {
        this.update(firstName);
        this.editPatient = undefined;
    }

    update(firstName: string) {
        if (firstName && this.editPatient && this.editPatient.firstName !== firstName) {
            this.patientService
                .updatePatient({...this.editPatient, firstName: firstName})
                .subscribe(patient => {
                    const ix = patient ? this.patients.findIndex(p => p.id === patient.id) : -1;
                    if (ix > -1) {
                        this.patients[ix] = patient;
                    }
                    this.editPatient = undefined;
                })
        }
    }
}