import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// Router Module
import { AppRouterModule } from './app-routing.module';

// ngx image gallery library
import { NgxGalleryModule } from 'ngx-gallery';

// application components.
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './imagegallery/component/imagegallery.component';

// image service
import { ImageGalleryService } from "./imagegallery/service/imagegallery.service";


@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [ImageGalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
