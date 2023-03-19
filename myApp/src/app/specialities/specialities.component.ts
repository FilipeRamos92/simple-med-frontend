import { Component, OnInit } from "@angular/core";
import { SpecialitiesService } from "./specialities.service";
import { Speciality } from "./speciality";

@Component({
    selector: 'app-specialities',
    templateUrl: './specialities.component.html',
    providers: [SpecialitiesService]
})

export class SpecialitiesComponent implements OnInit {
    specialities: Speciality[] = [];
    editSpeciality: Speciality | undefined;
    name = '';

    constructor(private specialityService: SpecialitiesService) {}

    ngOnInit(): void {
        this.getSpecialities();
    }

    getSpecialities(): void {
        this.specialityService.getSpecialities()
            .subscribe(specialities => (this.specialities = specialities))
    }

    addSpeciality(name: string): void {
        this.editSpeciality = undefined;
        name = name.trim()
        if (!name) {
            return;
        }
        const newSpeciality: Speciality = { name } as Speciality;

        this.specialityService
            .addSpeciality(newSpeciality)
            .subscribe((speciality) => this.specialities.push(speciality));
    }

    deleteSpeciality(speciality: Speciality): void {
        this.specialities = this.specialities.filter(h => h !== speciality);
        this.specialityService
          .deleteSpeciality(speciality.id)
          .subscribe();

          console.log(this.specialities);
      }
}