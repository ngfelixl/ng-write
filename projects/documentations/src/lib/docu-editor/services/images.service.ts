import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {
  imageUrls: string[];

  setImages(imageUrls: string[]) {
    this.imageUrls = imageUrls;
  }
}
