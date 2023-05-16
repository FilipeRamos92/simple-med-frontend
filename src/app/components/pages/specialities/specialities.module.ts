import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialitiesRoutingModule } from './specialities-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SpecialitiesComponent } from './specialities.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    SpecialitiesComponent
  ],
  imports: [
    CommonModule,
    SpecialitiesRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SpecialitiesModule { }
