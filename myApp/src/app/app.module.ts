import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientsComponent } from './patients/patients.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';

@NgModule({
  declarations: [
    RegisterPatientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
    // FormsModule
  ],
  providers: [],
  bootstrap: [RegisterPatientComponent]
})
export class AppModule { }
