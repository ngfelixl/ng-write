import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog.component';
import { ImagesService } from '../services/images.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'docu-image-form',
  template: `
  <div [formGroup]="form">
    <div class="image">
      <button mat-flat-button (click)="openDialog()">Select an image</button>
      <div class="preview" *ngIf="imageUrl">
        <img [src]="imageUrl">
      </div>
      <mat-slider thumbLabel tickInterval="1" min="5" max="100" formControlName="textwidth"></mat-slider>
    </div>
    <mat-form-field>
      <textarea matInput placeholder="Caption" formControlName="caption" cdkTextareaAutosize></textarea>
    </mat-form-field>
  </div>
  `,
  styles: [`
    mat-form-field { width: 100%; margin-top: 8px; }
    .image { display: flex; justify-content: space-between; align-items: center; }
    .image > * { flex: 0 0 auto; }
    .preview { width: 32px; height: 32px; }
    .preview > img { width: 100%; height: 100%; ; object-fit: cover; object-position: center center; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageFormComponent {
  @Input() form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private imagesService: ImagesService,
    private changeDetector: ChangeDetectorRef
  ) {}

  get imageUrl(): string {
    return this.form.get('imageUrl').value as string;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '80%',
      data: this.imagesService.imageUrls
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.form.patchValue({
          imageUrl: result
        });
        this.changeDetector.detectChanges();
      }
    });
  }
}
