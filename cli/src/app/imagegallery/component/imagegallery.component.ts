import { Component, OnInit, OnDestroy } from "@angular/core";
import { ImageGalleryService } from "../service/imagegallery.service";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: "image-gallery",
  templateUrl: "../views/imagegallery.component.html"
})
export class ImageGalleryComponent implements OnInit, OnDestroy {

  protected errMsg: string;
  protected galleryOptions: NgxGalleryOptions[];
  protected galleryImages: NgxGalleryImage[] = [];

  constructor(
    private imageGalleryService: ImageGalleryService
  ) {}

  ngOnInit() {
    // initial image gallery configuration.
    this.galleryOptions = [
      {
          image: false,
          height: '80vh',
          width: '77vw',
          thumbnailsRemainingCount: true,
          thumbnailsRows: 4
      },
      {
          breakpoint: 100,
          width: '100%',
          thumbnailsColumns:4
      }
    ];
    this.getProfiles();
  }

  // Fetch data from api 
  getProfiles = function(tags:string = "") {
    this.errMsg = '';
    document.getElementById("loading").classList.remove("display-none");
    this.imageGalleryService.getFeeds(tags).subscribe(
      data => {
        this.galleryImages = [];
        data.map(img =>{  // Map image url to galleryImage obj.
          this.galleryImages.push({
            medium: img.media.m, 
            big: img.media.m, 
            small: img.media.m
          });
        })
        document.getElementById("loading").classList.add("display-none");
      },
      err => {
        console.log(err);
        if (err && err.error!.errorMsg != "") {
          this.errMsg = err.error!.errorMsg;
        } else {
          this.errMsg = "Unknown error occurred";
        }
        document.getElementById("loading").classList.add("display-none");
      }
    );
  }

  ngOnDestroy(): void {
    // release the resources consumed.
    this.errMsg = "";
    this.galleryImages = [];
    this.galleryOptions = [];
    this.getProfiles = null;
  }
}
