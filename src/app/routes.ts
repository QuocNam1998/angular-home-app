import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
const routeConfig: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home page",
  },
  {
    path: "details/:id",
    component: DetailComponent,
    title: "Home details",
  },
];
export default routeConfig;
