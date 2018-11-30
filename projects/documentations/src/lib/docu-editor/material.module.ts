import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
  MatTabsModule,
  MatExpansionModule,
  MatDialogModule,
  MatSliderModule
} from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatSliderModule
  ]
})
export class MaterialModule {}
