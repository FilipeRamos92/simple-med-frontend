import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { PatientsComponent } from './patients/patients.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    SpecialitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent, PatientsComponent, SpecialitiesComponent]
})
export class AppModule { }
