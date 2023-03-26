import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Patient } from '../patients/patient';
import { RegisterPatientService } from './register-patient.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {
  patients: Patient[] = [];
  editPatient: Patient | undefined;
  
  patientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  constructor(private registerPatientService: RegisterPatientService) {}

  ngOnInit(): void {
    this.getPatients();
  }
  
  getPatients(): void {
    this.registerPatientService.getPatients()
        .subscribe(patients => (this.patients = patients));
  }

  addPatient(): void {
    const newPatient: Patient = this.patientForm.value as Patient;
    this.registerPatientService.postPatient(newPatient)
        .subscribe((patient) => this.patients.push(patient));
  }

  edit(firstName: string) {
    console.log(this.editPatient);
  }

  deletePatient(patient: Patient): void {
    this.patients = this.patients.filter(p => p !== patient);
    this.registerPatientService.deletePatient(patient.id).subscribe();
  }

  onSubmit() {
    this.addPatient();
    // console.warn(this.patientForm.value);
    console.log(this.patients.length);
    // console.log(this.patientForm.value);
  }
}
