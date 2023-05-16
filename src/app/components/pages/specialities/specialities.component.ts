import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SpeciatiliesService } from 'src/app/services/specialities/speciatilies.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {

  options: string[] = [""];

  formGroup! : FormGroup;
  
  filteredOptions!: string[];

  @Output()
  specialityEvent = new EventEmitter<string>();
  
  constructor(
    private service : SpeciatiliesService,
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.initForm();
    this.findSpecialities();
  }

  initForm(): void {
    this.formGroup = this.fb.group({'speciality': ['']})
    this.formGroup.get('speciality')?.valueChanges.subscribe(response => {
      this.filterSpeciality(response);
    })
  }

  filterSpeciality(entered: string) {
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(entered.toLowerCase()) > -1
    })
  }

  findSpecialities(): void {
    this.service.getSpecialities().subscribe( speciality =>  { 
      this.options = speciality;
      this.filteredOptions = speciality;
    })
  }

  selectSpeciality(value: string): void {
    this.service.changeData(value);
  }

  goDoctorList(): void {
    this.router.navigate(['/agendamento/medicos', { especialidade: this.filteredOptions }]);
  }
}
