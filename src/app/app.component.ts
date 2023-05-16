import { Component, OnInit } from '@angular/core';
import { SpeciatiliesService } from './services/specialities/speciatilies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';

  data: string = '';

  constructor(private specialityService: SpeciatiliesService) {}

  ngOnInit(): void {
      this.specialityService.data$.subscribe(res => this.data = res)
  }
}
