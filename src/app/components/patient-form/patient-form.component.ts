import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Patient } from 'src/app/patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  @Input() btnText!: string;
  @Output() onSubmit = new EventEmitter<Patient>();

  patientForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.patientForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      cellphone: new FormControl('', [Validators.required])
    });
  }

  public get firstName() {
    return this.patientForm.get('firstName')!;
  }

  public get lastName() {
    return this.patientForm.get('lastName')!;
  }

  
  public get email() {
    return this.patientForm.get('email')!;
  }
  
  
  public get birthdate() {
    return this.patientForm.get('birthdate')!;
  }

  
  public get gender() {
    return this.patientForm.get('gender')!;
  }

  
  public get cellphone() {
    return this.patientForm.get('cellphone')!;
  }
  
  
  
  submit(): void {
    if (this.patientForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.patientForm.value);
  }
}
