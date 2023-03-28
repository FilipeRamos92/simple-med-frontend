import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { SpecialitiesComponent } from './components/specialities/specialities.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { NewPatientComponent } from './components/pages/new-patient/new-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialitiesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PatientFormComponent,
    NewPatientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
