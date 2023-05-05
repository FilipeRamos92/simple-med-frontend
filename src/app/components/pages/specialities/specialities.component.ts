import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SpeciatiliesService } from 'src/app/services/speciatilies.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  options = [""];

  formGroup! : FormGroup;
  
  filteredOptions!: string[];
  
  constructor(private service : SpeciatiliesService, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.findSpecialities();
  }

  initForm() {
    this.formGroup = this.fb.group({
      'speciality': ['']
    })
    this.formGroup.get('speciality')?.valueChanges.subscribe(response => {
      this.filterSpeciality(response);
    })
  }

  filterSpeciality(entered: string) {
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(entered.toLowerCase()) > -1
    })
  }

  findSpecialities() {
    this.service.getSpecialities().subscribe( speciality =>  { 
      this.options = speciality;
      this.filteredOptions = speciality;
    })
  }
}
