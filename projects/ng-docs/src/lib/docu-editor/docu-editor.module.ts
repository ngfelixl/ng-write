import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { components } from './components/index';
import { services } from './services/index';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    DragDropModule
  ],
  declarations: [
    components
  ],
  providers: [
    services
  ],
  exports: [
    components
  ],
  entryComponents: [
    ImageDialogComponent
  ]
})
export class DocuEditorModule {}
