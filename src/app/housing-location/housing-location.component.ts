import { Component, Input } from "@angular/core";
import { HousingLocation } from "../housinglocation";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-housing-location",
  templateUrl: "./housing-location.component.html",
  styleUrls: ["./housing-location.component.css"],
  standalone: true,
  imports: [RouterModule],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
