import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ImageGalleryComponent } from "./imagegallery/component/imagegallery.component";

// route configurations
const routes: Routes = [
  {
    path: "imagegallery",
    component: ImageGalleryComponent,
  },
  {
    path: "",
    redirectTo: "imagegallery",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouterModule {}
