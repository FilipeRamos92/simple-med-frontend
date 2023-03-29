import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Patient } from 'src/app/patient';
import { MessagesService } from 'src/app/services/messages.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  btnText = "Confirmar";

  constructor(
    private patientService: PatientService, 
    private messagesService: MessagesService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  async createHandler(patient: Patient) {
    this.patientService.createPatient(patient).subscribe();

    this.messagesService.add("Cadastro realizado com sucesso!");

    this.router.navigate(['/'])
  }
}
