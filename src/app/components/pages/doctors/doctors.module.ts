import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DoctorsComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DoctorsModule { }
