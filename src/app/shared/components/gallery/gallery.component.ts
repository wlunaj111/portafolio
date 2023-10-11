import { Component } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  public open = false

  private lightGallery!: LightGallery;
  private needRefresh = false;

  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail],
};
onBeforeSlide = (detail: BeforeSlideDetail): void => {

    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
    console.log('detail',detail)
};

onInit = (detail:any): void => {
  this.lightGallery = detail.instance;
  console.log(detail.instance)
  this.open = detail.instance.openGallery();
  detail.instance.openGallery();
};

}
