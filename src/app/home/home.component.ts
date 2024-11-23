import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housinglocation";
import { HousingService } from "../housing.service";
import { RouterModule } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, RouterModule],
})
export class HomeComponent {
  filteredLocationList: Array<HousingLocation> = [];
  housingService: HousingService = inject(HousingService);
  readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";
  housingLocation: HousingLocation = {
    id: 9999,
    name: "Test Home",
    city: "Test city",
    state: "ST",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
  housingLocationList: HousingLocation[] = [];
  filterResults(text?: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    const filterResults = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
    this.filteredLocationList = filterResults;
  }
  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }
}
