import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaData } from '../../models/meta-data';

@Injectable()
export class UpdateMetaService {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  update(metaData: MetaData) {
    this.title.setTitle(metaData.title);
    this.meta.updateTag({ name: 'og:title', content: metaData.title });
    if (metaData.description) {
      this.meta.updateTag({ name: 'description', content: metaData.description });
      this.meta.updateTag({ name: 'og:description', content: metaData.description });
    }
    if (metaData.image) {
      this.meta.updateTag({ name: 'image', content: metaData.image });
      this.meta.updateTag({ name: 'og:image', content: metaData.image });
    }
  }
}
