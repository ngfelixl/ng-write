import { Component, ChangeDetectionStrategy, Inject, ViewChildren, QueryList, ElementRef, OnChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'docu-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: [ './image-dialog.component.css' ],
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
