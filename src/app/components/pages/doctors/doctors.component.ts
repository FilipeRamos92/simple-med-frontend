import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Doctor } from 'src/app/interfaces/doctor';
import { DoctorsService } from 'src/app/services/doctors/doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})

export class DoctorsComponent implements OnInit {

  doctorList: Doctor[] = [];
  doctorType: string = "";

  constructor(
    private service: DoctorsService, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.findDoctors();
      this.doctorParam();
  }

  findDoctors(): void {
    this.service.getDoctors()
      .subscribe(response => response.map(doctor => this.doctorList.push(doctor)
    ));
  }

  doctorParam(): void {
      this.doctorType = this.route.snapshot.paramMap.get('especialidade')!
  }
}
