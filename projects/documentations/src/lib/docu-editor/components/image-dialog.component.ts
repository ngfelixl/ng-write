import { Component, ChangeDetectionStrategy, Inject, ViewChildren, QueryList, ElementRef, OnChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'docu-image-dialog',
  template: `
    <h2 mat-dialog-title>Select an image</h2>
    <mat-dialog-content>
      <div class="images-container" *ngIf="data">
        <div
          #imgbox
          class="image-box"
          *ngFor="let image of data"
          (click)="select(image)"
          [class.selected]="selected === image">
          <img [src]="image">
        </div>
      </div>
      <h3 *ngIf="!data">No images available</h3>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button [mat-dialog-close]="selected" cdkFocusInitial>Select</button>
    </mat-dialog-actions>`,
  styles: [`
    .images-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); grid-gap: 16px; }
    .image-box { cursor: pointer;  }
    .image-box { border: 1px solid rgba(0, 0, 0, 0); transition: border 0.2s ease-in-out; }
    .image-box.selected { border: 1px solid rgba(0, 0, 0, 0.4); }
    .image-box:hover { border: 1px solid rgba(0, 0, 0, 0.8); }
    .image-box.selected > img { opacity: 0.7; }
    img { display: block; width: 100%; height: 100%; object-fit: cover;
      object-position: center center; transition: opacity 0.2s ease-in-out; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageDialogComponent implements OnChanges {
  @ViewChildren('imgbox') imgs: QueryList<ElementRef>;
  selected: string;

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) {}

  select(item: string) {
    this.selected = item;
  }

  ngOnChanges() {
    this.imgs.forEach(img => img.nativeElement.clientHeight = img.nativeElement.clientWidth);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
