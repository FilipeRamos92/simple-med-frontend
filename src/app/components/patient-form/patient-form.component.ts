import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  @Input() btnText!: string;

  patientForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.patientForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    });
  }

  get firstName() {
    return this.patientForm.get('firstName')!;
  }

  get lastName() {
    return this.patientForm.get('lastName')!;
  }

  submit(): void {
    if (this.patientForm.invalid) {
      return;
    }
    console.log("Formulário enviado!");
  }
}
