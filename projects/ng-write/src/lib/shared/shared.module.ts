import { NgModule } from '@angular/core';

import { components } from './components/index';
import { pipes } from './pipes/index';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    components,
    pipes
  ],
  exports: [
    components,
    pipes
  ]
})
export class SharedModule {}
