import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HomepageComponent } from './homepage.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [PatientsComponent]
})
export class AppModule { }
