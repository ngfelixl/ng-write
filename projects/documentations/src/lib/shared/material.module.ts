import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class MaterialModule {}
