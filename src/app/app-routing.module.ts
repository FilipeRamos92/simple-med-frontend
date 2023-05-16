import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { 
      path: 'agendamento/especialidades', loadChildren: () =>
      import("./components/pages/specialities/specialities.module").then((m) => m.SpecialitiesModule)
    },
    {
      path: 'agendamento/medicos', loadChildren: () =>
      import("./components/pages/doctors/doctors.module").then((m) => m.DoctorsModule)
    }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }