import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PatientsComponent } from './patients/patients.component';
import { SpecialitiesComponent } from './specialities/specialities.component';

const routes: Routes = [
    { path: 'register', component: PatientsComponent },
    { path: 'speciality', component: SpecialitiesComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }