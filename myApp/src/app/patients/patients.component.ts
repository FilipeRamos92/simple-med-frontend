import { Component, OnInit, ViewChild } from "@angular/core";

import { Patient } from "./patient";
import { PatientService } from "./patients.service";

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    providers: [PatientService]
})

export class PatientsComponent implements OnInit {
    patients: Patient[] = [];
    editPatient: Patient | undefined;
    patientName = '';

    constructor(private patientService: PatientService) {}

    ngOnInit(): void {
        this.getPatients();
    }

    getPatients(): void {
        this.patientService.getPatients()
            .subscribe(patients => (this.patients = patients))
    }
}