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
  MatExpansionModule
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
    MatExpansionModule
  ]
})
export class MaterialModule {}
