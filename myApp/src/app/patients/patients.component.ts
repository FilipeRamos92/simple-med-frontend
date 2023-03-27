import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from './patient';
import { PatientsService } from './patients.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];
  patientForm: FormGroup;
  editPatient: Patient;


  constructor(private patientsService: PatientsService, private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      firstName: '',
      lastName: ''
    })

    this.editPatient = {
      id: 0,
      firstName: '',
      lastName: '',
      birthdate: '',
      cellphone: '',
      email: '',
      gender: ''

    }
  }

  ngOnInit(): void {
    this.getPatients();
  }
  
  getPatients(): void {
    this.patientsService.getPatients()
        .subscribe(patients => (this.patients = patients));
  }

  addPatient(): void {
    const newPatient: Patient = this.patientForm.value as Patient;
    this.patientsService.postPatient(newPatient)
        .subscribe((patient) => this.patients.push(patient));
  }


  deletePatient(patient: Patient): void {
    this.patients = this.patients.filter(p => p !== patient);
    this.patientsService.deletePatient(patient.id).subscribe();
  }

  updatePatient(form: FormGroup): void {
    this.editPatient.firstName = form.value.firstName;
    this.editPatient.lastName = form.value.lastName;
    this.patientsService.putPatient(this.editPatient).subscribe();
  }

  onSubmit() {
    this.addPatient();
  }
}
