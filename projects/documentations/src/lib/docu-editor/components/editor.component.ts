import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Documentation } from '../../models';
import { DynamicFormsService } from '../services/dynamic-forms.service';

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
export class EditorComponent {
  form: FormGroup;
  @Input() documentation: Documentation;
  @Output() save = new EventEmitter<Documentation>();

  constructor(private dynamicForms: DynamicFormsService) {
    this.form = this.dynamicForms.documentation();
  }
}
