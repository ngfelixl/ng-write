import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components } from './components/index';
import { UpdateMetaService } from './services/update-meta.service';
import { MaterialModule } from './material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    components
  ],
  providers: [
    UpdateMetaService
  ],
  exports: [
    components
  ]
})
export class DocuModule {}
