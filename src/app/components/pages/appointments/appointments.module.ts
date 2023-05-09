import { NgModule } from '@angular/core';
import { AppointmentsComponent } from './appointments.component';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SpecialitiesComponent } from '../specialities/specialities.component';

@NgModule({
  declarations: [
    AppointmentsComponent,
    SpecialitiesComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule
  ]
})
export class AppointmentsModule { }
