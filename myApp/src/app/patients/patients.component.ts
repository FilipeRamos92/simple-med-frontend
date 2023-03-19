import { Component, OnInit } from "@angular/core";

import { Patient } from "./patient";
import { PatientsService } from "./patients.service";

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
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
        console.log(firstName, lastName, email, birthdate, gender, cellphone);
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
}