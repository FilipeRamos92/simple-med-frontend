import { Component } from "@angular/core";
import { NgbAlert } from "@ng-bootstrap/ng-bootstrap";
import { Car } from "./service/car";
import { TransportationService } from "./service/TransportationService";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NgbAlert],
    templateUrl: './homepage-component.html'
})

export class HomepageComponent {
    
    
}