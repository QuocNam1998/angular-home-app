import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housinglocation";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  imports: [ReactiveFormsModule],
  standalone: true,
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  form = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });
  submitApplication() {
    const firstName = this.form.get("firstName")?.value || "";
    const lastName = this.form.get("lastName")?.value || "";
    const email = this.form.get("email")?.value || "";

    // Use these values with the service
    this.housingService.submitApplication(firstName, lastName, email);
  }
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params["id"], 10);
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
      });
  }
}
