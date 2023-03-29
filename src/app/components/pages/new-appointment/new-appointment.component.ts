import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctor';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  doctors: Doctor[] = [];
  search: string = 'Cardiologia';
  filteredDoctors: Doctor[] = [];

  constructor(private appointmentsService: AppointmentsService) {
  }

  ngOnInit(): void {
    this.findDoctorList();
    console.log(this.doctors);
  }

  findDoctorList() {
    this.appointmentsService.getDoctors()
        .subscribe((doctor) => this.doctors = doctor);
    console.log(this.doctors);
  }

  getSearch(searchValue: string): void {
    this.search = searchValue;
  }

  listDoctors(): void {
    this.filteredDoctors = this.doctors.filter((value) => value.speciality.name === this.search);
  }

  renderDoctorIcon(gender: string): string {
    if (gender === 'Masculino') {
      return "../../../../assets/icon-doctor-male.svg";
    }
    return "../../../../assets/icon-doctor-female.svg";
  }
}
