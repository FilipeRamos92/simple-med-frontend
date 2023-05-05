import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialitiesRoutingModule } from './specialities-routing.module';
import { SpecialitiesComponent } from './specialities.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    SpecialitiesComponent
  ],
  imports: [
    CommonModule,
    SpecialitiesRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class SpecialitiesModule { }
