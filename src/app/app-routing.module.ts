import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    {
      path: 'medicos',
      loadChildren: () => import('./components/pages/doctors/doctors.module').then(m => m.DoctorsModule)
    },
    {
      path: 'nova-consulta',
      loadChildren: () => import('./components/pages/appointments/appointments.module')
        .then(m => m.AppointmentsModule)
    },
    {
      path: 'nova-consulta/especialidades',
      loadChildren: () => import('./components/pages/specialities/specialities.module')
        .then(m => m.SpecialitiesModule)
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }