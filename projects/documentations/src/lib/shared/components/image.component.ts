import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Image } from '../../models/section-types';

@Component({
  selector: 'docu-image',
  template: `
  <img *ngIf="content && !content?.caption && content?.imageUrl" [src]="content.imageUrl" [ngStyle]="{'width.%': content.textwidth}">
  <figure *ngIf="content?.caption && content?.imageUrl">
    <img [src]="content.imageUrl" [ngStyle]="{'width.%': content.textwidth}">
    <figcaption>{{content.caption}}</figcaption>
  </figure>
  `,
  styles: [`
    :host { display: block; }
    img { display: block; margin: 0 auto 8px auto; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  @Input() content: Image;
}
