import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Documentation } from '../../models';
import { DynamicFormsService } from '../services/dynamic-forms.service';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'docu-editor',
  template: `
    <form [formGroup]="form" (ngSubmit)="save.emit(form.value)">
      <docu-documentation-form [form]="form" [documentation]="documentation"></docu-documentation-form>
      <button mat-raised-button color="primary">Save</button>
    </form>
  `,
  styles: [``]
})
export class EditorComponent implements OnInit {
  form: FormGroup;
  @Input() documentation: Documentation;
  @Input() imageUrls: string[] = [];
  @Output() save = new EventEmitter<Documentation>();

  constructor(
    private dynamicForms: DynamicFormsService,
    private imagesService: ImagesService
  ) {
    this.form = this.dynamicForms.documentation();
  }

  ngOnInit() {
    this.imagesService.setImages(this.imageUrls);
  }
}
