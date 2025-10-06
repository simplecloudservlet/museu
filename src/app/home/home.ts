import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing-service';
import { number, string } from 'cohere-ai/core/schemas';
import { materialize } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


  filteredLocationList: HousingLocationInfo[] = [];
  housingLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;

  }
  

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
